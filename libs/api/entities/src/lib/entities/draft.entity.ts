import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  Relation,
} from 'typeorm';
import { Players_V2 } from './player.entity';
import { Teams_V2 } from './team.entity';

@Entity()
export class Drafts_V2 {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Players_V2, (player) => player.id)
  @JoinColumn({ name: 'player_id' })
  player_id!: Relation<Players_V2>;

  @Column()
  draft_year!: string;

  @Column()
  draft_round!: number;

  @Column()
  draft_overall!: number;

  @ManyToOne(() => Teams_V2, (team) => team.id)
  @JoinColumn({ name: 'team_id' })
  team_id!: Teams_V2;

  @ManyToOne(() => Teams_V2, (team) => team.id)
  @JoinColumn({ name: 'pick_team_id' })
  pick_team_id!: Teams_V2;
}
