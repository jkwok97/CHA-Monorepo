import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { Conferences_V2 } from './conference.entity';

@Entity()
export class Divisions_V2 {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  divisionname!: string;

  @OneToOne(() => Conferences_V2, (conference) => conference.id, {
    eager: true,
  })
  @JoinColumn({ name: 'conference_id' })
  conference_id!: number;

  @Column()
  isactive!: boolean;
}
