import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Teams_V2 } from '../teams';

@Entity()
export class Team_Stats_V2 {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Teams_V2, (team) => team.id)
  @JoinColumn({ name: 'team_id' })
  team_id!: Teams_V2 | number;

  @Column()
  games_played!: number;

  @Column()
  wins!: number;

  @Column()
  loss!: number;

  @Column()
  ties!: number;

  @Column()
  points!: number;

  @Column()
  goals_for!: number;

  @Column()
  goals_against!: number;

  @Column()
  pp_attempts!: number;

  @Column()
  pp_goals!: number;

  @Column()
  pp_min!: number;

  @Column()
  pk_attempts!: number;

  @Column()
  pk_goals!: number;

  @Column()
  pk_min!: number;

  @Column()
  penalty_minutes!: number;

  @Column()
  sh_goals!: number;

  @Column()
  home_wins!: number;

  @Column()
  home_loss!: number;

  @Column()
  home_ties!: number;

  @Column()
  road_wins!: number;

  @Column()
  road_loss!: number;

  @Column()
  road_ties!: number;

  @Column()
  div_win!: number;

  @Column()
  div_loss!: number;

  @Column()
  div_tie!: number;

  @Column()
  ot_win!: number;

  @Column()
  ot_loss!: number;

  @Column()
  lead_after_two_wins!: number;

  @Column()
  lead_after_two_loss!: number;

  @Column()
  lead_after_two_ties!: number;

  @Column()
  trail_after_two_wins!: number;

  @Column()
  trail_after_two_loss!: number;

  @Column()
  trail_after_two_ties!: number;

  @Column()
  even_after_two_wins!: number;

  @Column()
  even_after_two_loss!: number;

  @Column()
  even_after_two_ties!: number;

  @Column()
  long_win_streak!: number;

  @Column()
  shots_for!: number;

  @Column()
  shots_against!: number;

  @Column()
  face_off_won!: number;

  @Column()
  face_off_lost!: number;

  @Column()
  corner_won!: number;

  @Column()
  corner_lost!: number;

  @Column()
  pass_complete!: number;

  @Column()
  pass_incomplete!: number;

  @Column()
  empty_net!: number;

  @Column()
  shut_outs!: number;

  @Column()
  playing_year!: string;

  @Column()
  season_type!: 'Regular' | 'Playoffs';
}
