import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { Users_V2 } from '../user';

@Entity()
export class Teams_V2 {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  shortname!: string;

  @Column()
  city!: string;

  @Column()
  nickname!: string;

  @Column()
  isactive!: boolean;

  @Column()
  users_id!: number;

  @Column()
  teamlogo!: string;

  @Column()
  teamaltlogo!: string;

  @Column()
  teamcolor!: string;

  @Column()
  teamtextcolor!: string;

  @Column()
  divisions_id!: number;

  @ManyToOne(() => Users_V2, (user) => user.teams)
  user!: Users_V2;

  @AfterInsert()
  logInsert() {
    console.log('Inserted Team with id', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('Updated Team with id', this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log('Removed Team');
  }
}
