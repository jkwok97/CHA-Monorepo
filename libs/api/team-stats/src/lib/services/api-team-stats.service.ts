import { Conferences_V2, Team_Stats_V2 } from '@api/entities';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ApiTeamStatsService {
  constructor(
    @InjectRepository(Team_Stats_V2)
    private repo: Repository<Team_Stats_V2>,
    @InjectRepository(Conferences_V2)
    private conferencesRepo: Repository<Conferences_V2>
  ) {}

  async getTeamStatsBySeasonByType(
    season: string,
    seasonType: 'Regular' | 'Playoffs'
  ): Promise<Team_Stats_V2[]> {
    return await this.repo.find({
      relations: ['team_id'],
      select: {
        team_id: {
          id: true,
          city: true,
          teamlogo: true,
          shortname: true,
          nickname: true,
        },
        games_played: true,
        points: true,
        wins: true,
        loss: true,
        ties: true,
        long_win_streak: true,
        penalty_minutes: true,
        goals_for: true,
        goals_against: true,
        pk_goals: true,
        pk_attempts: true,
        pp_goals: true,
        pp_attempts: true,
      },
      where: {
        playing_year: season,
        season_type: seasonType,
      },
    });
  }

  async getAllTeamStatsBySeasonByType(
    season: string,
    seasonType: 'Regular' | 'Playoffs'
  ): Promise<Team_Stats_V2[]> {
    const teamStats = await this.repo.find({
      relations: ['team_id'],
      select: {
        team_id: {
          id: true,
          city: true,
          teamlogo: true,
          shortname: true,
          nickname: true,
          divisions_id: {
            id: true,
            divisionname: true,
            conference_id: true,
          },
        },
        div_loss: true,
        div_tie: true,
        div_win: true,
        games_played: true,
        goals_against: true,
        goals_for: true,
        home_loss: true,
        home_ties: true,
        home_wins: true,
        loss: true,
        penalty_minutes: true,
        pk_attempts: true,
        pk_goals: true,
        pk_min: true,
        playing_year: true,
        points: true,
        pp_attempts: true,
        pp_goals: true,
        road_loss: true,
        road_ties: true,
        road_wins: true,
        season_type: true,
        ties: true,
        trail_after_two_loss: true,
        trail_after_two_ties: true,
        trail_after_two_wins: true,
        wins: true,
      },
      where: {
        playing_year: season,
        season_type: seasonType,
      },
    });

    const teamStatsWithConference = await this.setConferenceInfo(teamStats);

    return teamStatsWithConference;
  }

  async getTeamStandingsForPlayoffs(
    season: string,
    seasonType: 'Regular' | 'Playoffs'
  ): Promise<Team_Stats_V2[]> {
    const teamStats = await this.repo.find({
      relations: ['team_id'],
      select: {
        team_id: {
          id: true,
          city: true,
          teamlogo: true,
          teamcolor: true,
          shortname: true,
          nickname: true,
          divisions_id: {
            id: true,
            divisionname: true,
            conference_id: true,
          },
        },
        goals_against: true,
        goals_for: true,
        playing_year: true,
        points: true,
        season_type: true,
        wins: true,
      },
      where: {
        playing_year: season,
        season_type: seasonType,
      },
    });

    const teamStatsWithConference = await this.setConferenceInfo(teamStats);

    const teamStatsWithConferenceSorted = await this.sortTeamStatsByStandings(
      teamStatsWithConference
    );

    return teamStatsWithConferenceSorted;
  }

  private async setConferenceInfo(array: Team_Stats_V2[]) {
    return await Promise.all(
      array.map(async (item) => ({
        ...item,
        conference: await this.getConferenceInfo(
          item.team_id.divisions_id.conference_id
        ),
      }))
    );
  }

  private async getConferenceInfo(conferenceId: number) {
    return await this.conferencesRepo.findOne({
      select: {
        id: true,
        conferencename: true,
      },
      where: {
        id: conferenceId,
      },
    });
  }

  private sortTeamStatsByStandings = (data) => {
    return data
      .sort((a: any, b: any) => {
        if (b.points === a.points) {
          if (b.wins === a.wins) {
            if (
              b.goals_for - b.goals_against ===
              a.goals_for - a.goals_against
            ) {
              return b.goals_for - a.goals_for;
            } else {
              return (
                b.goals_for - b.goals_against - (a.goals_for - a.goals_against)
              );
            }
          } else {
            return b.wins - a.wins;
          }
        } else {
          return b.points - a.points;
        }
      });
  };
}
