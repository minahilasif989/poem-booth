import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { Booth } from '../../booth/entities/booth.entity';
import { Poem } from '../../poem/entities/poem.entity';
import { Poet } from '../../poet/entities/poet.entity';

@Entity()
export class Collection {
  @PrimaryGeneratedColumn()
  collection_id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  category: string;

  @Column({ nullable: true })
  description: string;

  @ManyToOne(() => Booth, (booth) => booth.collections)
  booth: Booth;

  @OneToMany(() => Poem, (poem) => poem.collection)
  poems: Poem[];

  @ManyToMany(() => Poet, (poet) => poet.collections)
  @JoinTable()
  poets: Poet[];
}