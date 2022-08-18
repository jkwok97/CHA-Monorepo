import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Team_Stats_V2 } from '../stats';
import { Teams_V2 } from '../teams';

@Entity()
export class Draft_Order_V2 {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Teams_V2, (team) => team.id)
  @ManyToOne(() => Team_Stats_V2, (stats) => stats.team_id)
  @JoinColumn({ name: 'team_id' })
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
}
