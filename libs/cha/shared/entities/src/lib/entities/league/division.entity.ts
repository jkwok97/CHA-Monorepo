import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Teams_V2 } from '../teams';

@Entity()
export class Divisions_V2 {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  divisionname!: string;

  @Column()
  conference_id!: string;

  @Column()
  isactive!: boolean;

  @OneToOne(() => Teams_V2, (team) => team.divisions_id)
  team!: Teams_V2;
}
