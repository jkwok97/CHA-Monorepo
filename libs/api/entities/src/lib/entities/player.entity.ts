import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  AfterInsert,
  AfterUpdate,
  AfterRemove,
  OneToOne,
} from 'typeorm';
import { Drafts_V2 } from './draft.entity';
import { Goalie_Ratings_V2 } from './goalie-rating.entity';
import { Goalies_Stats_V2 } from './goalie-stats.entity';
import { Player_Ratings_V2 } from './player-rating.entity';
import { Players_Stats_V2 } from './player-stats.entity';
import { Salaries_V2 } from './salary.entity';

@Entity()
export class Players_V2 {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  firstname!: string;

  @Column()
  lastname!: string;

  @Column()
  nhl_id!: string;

  @Column()
  isactive!: boolean;

  @Column()
  isgoalie!: boolean;

  @Column()
  isdefense!: boolean;

  @Column()
  isforward!: boolean;

  @Column()
  is_protected!: boolean;

  @Column()
  primary_position!: string;

  @Column()
  alt_position!: string;

  @OneToMany(() => Players_Stats_V2, (playerStats) => playerStats.player_id)
  playerStats!: Players_Stats_V2;

  @OneToMany(() => Goalies_Stats_V2, (goalieStats) => goalieStats.player_id)
  goalieStats!: Goalies_Stats_V2;

  @OneToOne(() => Salaries_V2, (salary) => salary.player_id)
  salary!: Salaries_V2;

  @OneToMany(() => Drafts_V2, (draft) => draft.player_id)
  draft!: Drafts_V2;

  @OneToMany(() => Goalie_Ratings_V2, (goalieRating) => goalieRating.player_id)
  goalieRating!: Goalie_Ratings_V2;

  @OneToMany(() => Player_Ratings_V2, (playerRating) => playerRating.player_id)
  playerRating!: Player_Ratings_V2;

  @AfterInsert()
  logInsert() {
    console.log('Inserted Player with id', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('Updated Player with id', this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log('Removed Player');
  }
}
