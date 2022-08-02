import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Award_Type_V2 {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  award_type!: string;

  @Column()
  display_name!: string;
}
