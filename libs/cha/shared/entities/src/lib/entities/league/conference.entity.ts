import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Divisions_V2 } from './division.entity';

@Entity()
export class Conferences_V2 {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  conferencename!: string;

  @Column()
  isactive!: boolean;

  @OneToOne(() => Divisions_V2, (division) => division.conference_id)
  division!: Divisions_V2;
}
