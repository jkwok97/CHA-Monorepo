import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users_V2 {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  email: string;

  @Column()
  isadmin: boolean;

  @Column()
  isactive: boolean;
}
