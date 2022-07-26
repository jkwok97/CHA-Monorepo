import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Transactions_V2 {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  transaction_date!: Date;

  @Column()
  team_one_id!: number;

  @Column('text', { array: true })
  team_one_picks!: string[];

  @Column('int', { array: true })
  team_one_players!: number[];

  @Column()
  team_two_id!: number;

  @Column('text', { array: true })
  team_two_picks!: string[];

  @Column('int', { array: true })
  team_two_players!: number[];
}
