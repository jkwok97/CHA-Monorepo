import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Player_Ratings_V2 {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  player_id!: number;

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
  game_fatigue!: string;

  @Column()
  shift_fatigue!: string;

  @Column()
  c_rate!: string;

  @Column()
  l_rate!: string;

  @Column()
  r_rate!: string;

  @Column()
  ld_rate!: string;

  @Column()
  rd_rate!: string;

  @Column()
  shooting!: string;

  @Column()
  skating!: string;

  @Column()
  speed!: string;

  @Column()
  passing!: string;

  @Column()
  forecheck!: string;

  @Column()
  physical!: string;

  @Column()
  intimidation!: string;

  @Column()
  clear_crease!: string;

  @Column()
  rock!: string;

  @Column()
  pk!: string;

  @Column()
  shot_block!: string;

  @Column()
  face_off!: string;

  @Column()
  assist_rating!: string;

  @Column()
  playing_year!: string;

  //TODO NEED ONE FOR PLAYERS ENTITY
}
