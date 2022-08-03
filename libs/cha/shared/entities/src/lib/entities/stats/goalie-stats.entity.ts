import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne } from 'typeorm';
import { Players_V2 } from '../players/player.entity';
import { Teams_V2 } from '../teams';

@Entity()
export class Goalies_Stats_V2 {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  player_id!: number;

  @Column()
  team_name!: string;

  @Column()
  games_played!: number;

  @Column()
  minutes_played!: number;

  @Column()
  goals_against_avg!: string;

  @Column()
  wins!: number;

  @Column()
  loss!: number;

  @Column()
  ties!: number;

  @Column()
  en_goals!: number;

  @Column()
  shutouts!: number;

  @Column()
  goals_against!: number;

  @Column()
  saves!: number;

  @Column()
  shots_for!: number;

  @Column()
  save_pct!: string;

  @Column()
  goals!: number;

  @Column()
  assists!: number;

  @Column()
  points!: number;

  @Column()
  penalty_minutes!: number;

  @Column()
  pass_complete!: number;

  @Column()
  pass_incomplete!: number;

  @Column()
  pass_attempts!: number;

  @Column()
  pass_pct!: string;

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
  player!: Players_V2;
}
