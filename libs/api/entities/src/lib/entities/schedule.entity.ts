import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Schedule_V2 {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  game_day!: number;

  @Column()
  vis_team_id!: number;

  @Column()
  vis_team_game_number!: number;

  @Column()
  vis_team_score!: number;

  @Column()
  home_team_id!: number;

  @Column()
  home_team_game_number!: number;

  @Column()
  home_team_score!: number;

  @Column()
  playing_year!: string;
}
