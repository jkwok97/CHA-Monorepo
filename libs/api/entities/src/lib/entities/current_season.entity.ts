import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Current_Season_V2 {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  current_year!: string;

  @Column()
  next_year!: string;

  @Column()
  prev_year!: string;

  @Column()
  nhl_year!: string;

  @Column()
  current_season_type!: string;

  @Column()
  current_day!: number;

  @Column()
  current_draft_year!: number;

  @Column()
  next_draft_year!: number;

  @Column()
  current_cap!: string;

  @Column()
  next_cap!: string;

  @Column()
  min_games!: number;

  @Column()
  offseason!: boolean;

  @Column()
  min_games_stats!: number;
}
