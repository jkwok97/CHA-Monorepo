import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Players_V2 } from '../players/player.entity';
import { Teams_V2 } from '../teams';
import { Users_V2 } from '../user';
import { Award_Type_V2 } from './award-type.entity';

@Entity()
export class Awards_V2 {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  display_season!: string;

  @Column()
  cha_season!: string;

  @Column()
  award_type!: number;

  @OneToOne(() => Award_Type_V2, (type) => type.id)
  type!: Award_Type_V2;

  @ManyToOne(() => Users_V2, (user) => user.id)
  @JoinColumn({ name: 'users_id' })
  users!: Users_V2;

  @ManyToOne(() => Teams_V2, (team) => team.id)
  @JoinColumn({ name: 'team_id' })
  team!: Teams_V2;

  @ManyToOne(() => Players_V2, (player) => player.id)
  @JoinColumn({ name: 'player_id' })
  player!: Players_V2;
}
