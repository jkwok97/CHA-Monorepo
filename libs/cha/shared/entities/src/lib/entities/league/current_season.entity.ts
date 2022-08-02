import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Current_Season_V2 {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  current_year!: string;

  @Column()
  next_year!: string;

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
  current_cap!: number;

  @Column()
  next_cap!: number;

  @Column()
  min_games!: number;

  @Column()
  offseason!: boolean;
}
