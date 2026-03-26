import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Collection } from './entities/collection.entity';

@Injectable()
export class CollectionService {
  constructor(
    @InjectRepository(Collection)
    private collectionRepository: Repository<Collection>,
  ) {}

  // Get all collections
  findAll() {
    return this.collectionRepository.find({
      relations: ['booth', 'poets', 'poems'],
    });
  }

  // Get one collection
  findOne(id: number) {
    return this.collectionRepository.findOne({
      where: { collection_id: id },
      relations: ['booth', 'poets', 'poems'],
    });
  }

  // Search collections
  async search(name?: string, category?: string) {
    const query = this.collectionRepository
      .createQueryBuilder('collection')
      .leftJoinAndSelect('collection.booth', 'booth')
      .leftJoinAndSelect('collection.poets', 'poets')
      .leftJoinAndSelect('collection.poems', 'poems');

    if (name) {
      query.andWhere('collection.name ILIKE :name', { name: `%${name}%` });
    }
    if (category) {
      query.andWhere('collection.category ILIKE :category', { category: `%${category}%` });
    }

    return query.getMany();
  }
}