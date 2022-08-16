import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  AfterInsert,
  AfterUpdate,
  AfterRemove,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Awards_V2 } from '../awards';
import { Drafts_V2 } from '../draft';
import { Goalie_Ratings_V2, Player_Ratings_V2 } from '../ratings';
import { Salaries_V2 } from '../salaries';
import { Goalies_Stats_V2, Players_Stats_V2 } from '../stats';

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

  @OneToOne(() => Salaries_V2, (salary) => salary.player_id)
  salary!: Salaries_V2;

  @OneToMany(() => Drafts_V2, (draft) => draft.player_id)
  draft!: Drafts_V2;

  @OneToMany(() => Goalie_Ratings_V2, (goalieRating) => goalieRating.player_id)
  goalieRating!: Goalie_Ratings_V2;

  @OneToMany(() => Player_Ratings_V2, (playerRating) => playerRating.player_id)
  playerRating!: Player_Ratings_V2;

  @OneToMany(() => Goalies_Stats_V2, (goalieStats) => goalieStats.player_id)
  goalieStats!: Goalies_Stats_V2;

  @OneToMany(() => Players_Stats_V2, (playerStats) => playerStats.player_id)
  playerStats!: Players_Stats_V2;

  @OneToMany(() => Awards_V2, (award) => award.id)
  @JoinColumn({ name: 'player_id' })
  award!: Awards_V2;

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
