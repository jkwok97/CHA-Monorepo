import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { Award_Type_V2 } from './award-type.entity';
import { Players_Stats_V2 } from './player-stats.entity';
import { Players_V2 } from './player.entity';
import { Teams_V2 } from './team.entity';
import { Users_V2 } from './user.entity';

@Entity({
  orderBy: {
    display_season: 'DESC',
  },
})
export class Awards_V2 {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  display_season!: string;

  @OneToOne(() => Players_Stats_V2, (playerStats) => playerStats.playing_year)
  @Column()
  cha_season!: string;

  @OneToOne(() => Award_Type_V2, (award) => award.id)
  @JoinColumn({ name: 'award_type' })
  award_type!: Award_Type_V2;

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
