import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany } from 'typeorm';
import { Poem } from '../../poem/entities/poem.entity';
import { Collection } from '../../collection/entities/collection.entity';

@Entity()
export class Poet {
  @PrimaryGeneratedColumn()
  poet_id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  biography: string;

  @Column({ nullable: true })
  birth_date: Date;

  @Column({ nullable: true })
  death_date: Date;

  @OneToMany(() => Poem, (poem) => poem.poet)
  poems: Poem[];

  @ManyToMany(() => Collection, (collection) => collection.poets)
  collections: Collection[];
}