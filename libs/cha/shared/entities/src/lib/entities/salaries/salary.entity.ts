import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Players_V2 } from '../players/player.entity';

@Entity()
export class Salaries_V2 {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  player_id!: string;

  @Column()
  season_2020!: string;

  @Column()
  season_2021!: string;

  @Column()
  season_2022!: string;

  @Column()
  season_2023!: string;

  @Column()
  season_2024!: string;

  @Column()
  season_2025!: string;

  @Column()
  season_2026!: string;

  @Column()
  season_2027!: string;

  @Column()
  season_2028!: string;

  @Column()
  season_2029!: string;

  @Column()
  season_2030!: string;

  @Column()
  season_2031!: string;

  @Column()
  season_2032!: string;

  @Column()
  season_2033!: string;

  @Column()
  season_2034!: string;

  @Column()
  season_2035!: string;

  @Column()
  season_2036!: string;

  @Column()
  season_2037!: string;

  @Column()
  season_2038!: string;

  @Column()
  season_2039!: string;

  @Column()
  season_2040!: string;

  @OneToOne(() => Players_V2, (player) => player.id)
  player!: Players_V2;
}
