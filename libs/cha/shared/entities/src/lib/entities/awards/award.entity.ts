import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Players_V2 } from '../players/player.entity';
import { Teams_V2 } from '../teams';
import { Users_V2 } from '../user';

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

  @ManyToOne(() => Users_V2, (user) => user.id)
  @JoinColumn({ name: 'users_id' })
  users_id!: Users_V2;

  @ManyToOne(() => Teams_V2, (team) => team.id)
  @JoinColumn({ name: 'team_id' })
  team_id!: Teams_V2;

  @ManyToOne(() => Players_V2, (player) => player.id)
  @JoinColumn({ name: 'player_id' })
  player_id!: Players_V2;
}
