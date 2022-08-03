import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Goalie_Ratings_V2 {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  player_id!: number;

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
  skating!: string;

  @Column()
  speed!: string;

  @Column()
  passing!: string;

  @Column()
  playing_year!: string;

  //TODO NEED ONE FOR PLAYERS ENTITY
}