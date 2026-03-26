import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Collection } from '../../collection/entities/collection.entity';

@Entity()
export class Booth {
  @PrimaryGeneratedColumn()
  booth_id: number;

  @Column()
  location: string;

  @Column()
  theme: string;

  @OneToMany(() => Collection, (collection) => collection.booth)
  collections: Collection[];
}
