import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Divisions_V2 {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  divisionname!: string;

  @Column()
  conference_id!: number;

  @Column()
  isactive!: boolean;
}
