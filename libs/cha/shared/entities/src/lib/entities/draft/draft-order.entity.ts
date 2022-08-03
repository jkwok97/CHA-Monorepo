import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Teams_V2 } from '../teams';

@Entity()
export class Draft_Order_V2 {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  team_id!: number;

  @Column()
  round_one!: number;

  @Column()
  round_two!: number;

  @Column()
  round_three!: number;

  @Column()
  round_four!: number;

  @Column()
  round_five!: number;

  @Column()
  draft_year!: string;

  @ManyToOne(() => Teams_V2, (team) => team.id)
  team!: Teams_V2;
}
