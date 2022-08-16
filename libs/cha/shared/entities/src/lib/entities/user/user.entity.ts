import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Awards_V2 } from '../awards';
import { Teams_V2 } from '../teams';

@Entity()
export class Users_V2 {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  firstname!: string;

  @Column()
  lastname!: string;

  @Column()
  email!: string;

  @Column()
  isadmin!: boolean;

  @Column()
  isactive!: boolean;

  @OneToMany(() => Awards_V2, (award) => award.id)
  @JoinColumn({ name: 'users_id' })
  award!: Awards_V2;

  @AfterInsert()
  logInsert() {
    console.log('Inserted User with id', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('Updated User with id', this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log('Removed User');
  }
}
