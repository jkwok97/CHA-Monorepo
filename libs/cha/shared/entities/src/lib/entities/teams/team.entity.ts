import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Awards_V2 } from '../awards';

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

  @OneToMany(() => Awards_V2, (award) => award.id)
  @JoinColumn({ name: 'team_id' })
  award!: Awards_V2;

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
