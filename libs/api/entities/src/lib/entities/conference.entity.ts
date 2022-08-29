import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Conferences_V2 {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  conferencename!: string;

  @Column()
  isactive!: boolean;
}
