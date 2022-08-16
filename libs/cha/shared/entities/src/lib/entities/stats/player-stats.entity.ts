import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne } from 'typeorm';
import { Players_V2 } from '../players';
import { Teams_V2 } from '../teams';

@Entity()
export class Players_Stats_V2 {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  player_id!: number;

  @Column()
  team_name!: string;

  @Column()
  position!: string;

  @Column()
  games_played!: number;

  @Column()
  goals!: number;

  @Column()
  assists!: number;

  @Column()
  points!: number;

  @Column()
  plus_minus!: number;

  @Column()
  penalty_minutes!: number;

  @Column()
  pp_goals!: number;

  @Column()
  sh_goals!: number;

  @Column()
  gw_goals!: number;

  @Column()
  gt_goals!: number;

  @Column()
  shots!: number;

  @Column()
  shooting_pct!: string;

  @Column()
  minutes_played!: number;

  @Column()
  minutes_per_game!: string;

  @Column()
  fo_won!: number;

  @Column()
  fo_lost!: number;

  @Column()
  fo_tied!: number;

  @Column()
  fo_pct!: string;

  @Column()
  pass_complete!: number;

  @Column()
  pass_incomplete!: number;

  @Column()
  pass_attempts!: number;

  @Column()
  pass_pct!: string;

  @Column()
  corner_won!: number;

  @Column()
  corner_lost!: number;

  @Column()
  corner_total!: number;

  @Column()
  corner_pct!: string;

  @Column()
  fights_won!: number;

  @Column()
  fights_lost!: number;

  @Column()
  fights_tied!: number;

  @Column()
  fights_pct!: string;

  @Column()
  hits!: number;

  @Column()
  hit_per_game!: string;

  @Column()
  blocked_shots!: number;

  @Column()
  blocked_shot_per_game!: string;

  @Column()
  current_points_streak!: number;

  @Column()
  longest_points_streak!: number;

  @Column()
  penalty_minor!: number;

  @Column()
  penalty_minor_coincidental!: number;

  @Column()
  penalty_major!: number;

  @Column()
  penalty_fighting_major!: number;

  @Column()
  penalty_match!: number;

  @Column()
  penalty_misconduct!: number;

  @Column()
  penalty_game_misconduct!: number;

  @Column()
  penalty_gross_misconduct!: number;

  @Column()
  playing_year!: string;

  @Column()
  season_type!: 'Regular' | 'Playoffs';

  @Column()
  player_status!: 'Veteran' | 'Rookie';

  @OneToOne(() => Teams_V2, (team) => team.shortname)
  team!: Teams_V2;

  @ManyToOne(() => Players_V2, (player) => player.id)
  playerStats!: Players_Stats_V2;
}
