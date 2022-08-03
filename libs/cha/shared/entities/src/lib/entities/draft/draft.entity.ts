import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Players_V2 } from '../players/player.entity';
import { Teams_V2 } from '../teams';

@Entity()
export class Drafts_V2 {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  player_id!: number;

  @Column()
  draft_year!: string;

  @Column()
  draft_round!: number;

  @Column()
  draft_overall!: number;

  @Column()
  team_id!: number;

  @ManyToOne(() => Teams_V2, (team) => team.id)
  team!: Teams_V2;

  @ManyToOne(() => Players_V2, (player) => player.id)
  player!: Players_V2;
}
