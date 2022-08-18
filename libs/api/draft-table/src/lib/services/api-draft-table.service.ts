import { Draft_Order_V2, Team_Stats_V2 } from '@cha/shared/entities';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ApiDraftTableService {
  constructor(
    @InjectRepository(Draft_Order_V2) private repo: Repository<Draft_Order_V2>,
    @InjectRepository(Team_Stats_V2)
    private teamStatsRepo: Repository<Team_Stats_V2>
  ) {}

  async getDraftTableByYearByStandings(
    draftYear: string,
    playingYear: string
  ): Promise<Draft_Order_V2[]> {
    const draftTable = await this.repo.find({
      relations: ['team_id'],
      where: {
        draft_year: draftYear,
      },
    });

    const draftTableWithStandings = await this.setTableStandings(
      draftTable,
      playingYear
    );

    const draftTableByStandings = this.getDraftByStandings(
      draftTableWithStandings
    );

    return draftTableByStandings;
  }

  private async setTableStandings(
    array: Draft_Order_V2[],
    playingYear: string
  ) {
    return await Promise.all(
      array.map(async (item) => ({
        ...item,
        stats: await this.getTeamStats(item.team_id.id, playingYear),
      }))
    );
  }

  private async getTeamStats(teamId: number, playingYear: string) {
    console.log(teamId, playingYear);
    return await this.teamStatsRepo.findOne({
      select: {
        id: true,
        team_id: true,
        wins: true,
        goals_for: true,
        goals_against: true,
        points: true,
      },
      where: {
        team_id: teamId,
        playing_year: playingYear,
        season_type: 'Regular',
      },
    });
  }

  private getDraftByStandings = (data) => {
    return data
      .sort((a: any, b: any) => {
        if (b.stats.points === a.stats.points) {
          if (b.wins === a.wins) {
            if (
              b.stats.goals_for - b.stats.goals_against ===
              a.stats.goals_for - a.stats.goals_against
            ) {
              return b.stats.goals_for - a.stats.goals_for;
            } else {
              return (
                b.stats.goals_for -
                b.stats.goals_against -
                (a.stats.goals_for - a.stats.goals_against)
              );
            }
          } else {
            return b.stats.wins - a.stats.wins;
          }
        } else {
          return b.stats.points - a.stats.points;
        }
      })
      .reverse();
  };
}
