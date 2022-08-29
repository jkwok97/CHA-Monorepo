import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { Divisions_V2 } from './division.entity';

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

  @OneToOne(() => Divisions_V2, (division) => division.id, { eager: true })
  @JoinColumn({ name: 'divisions_id' })
  divisions_id!: Divisions_V2;

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
