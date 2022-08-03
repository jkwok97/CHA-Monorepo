import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Teams_V2 } from '../teams';

@Entity()
export class Waivers_V2 {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  team_id!: number;

  @Column()
  priority_number!: number;

  @OneToOne(() => Teams_V2, (team) => team.id)
  team!: Teams_V2;
}
