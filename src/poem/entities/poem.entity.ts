import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Collection } from '../../collection/entities/collection.entity';
import { Poet } from '../../poet/entities/poet.entity';

@Entity()
export class Poem {
  @PrimaryGeneratedColumn()
  poem_id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  image_url: string;

  @Column({ nullable: true })
  text: string;

  @ManyToOne(() => Collection, (collection) => collection.poems)
  collection: Collection;

  @ManyToOne(() => Poet, (poet) => poet.poems)
  poet: Poet;
}
