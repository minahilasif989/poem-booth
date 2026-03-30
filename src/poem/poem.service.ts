import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Poem } from './entities/poem.entity';

@Injectable()
export class PoemService {
  constructor(
    @InjectRepository(Poem)
    private poemRepository: Repository<Poem>,
  ) {}

  // Get all poems
  findAll() {
    return this.poemRepository.find({
      relations: ['poet', 'collection'],
    });
  }

  // Get one poem
  findOne(id: number) {
    return this.poemRepository.findOne({
      where: { poem_id: id },
      relations: ['poet', 'collection'],
    });
  }

  // Search poems
  async search(name?: string, poet?: string, collection?: string, category?: string) {
    const query = this.poemRepository
      .createQueryBuilder('poem')
      .leftJoinAndSelect('poem.poet', 'poet')
      .leftJoinAndSelect('poem.collection', 'collection');

    if (name) {
      query.andWhere('poem.name ILIKE :name', { name: `%${name}%` });
    }
    if (poet) {
      query.andWhere('poet.name ILIKE :poet', { poet: `%${poet}%` });
    }
    if (collection) {
      query.andWhere('collection.name ILIKE :collection', { collection: `%${collection}%` });
    }
    if (category) {
      query.andWhere('collection.category ILIKE :category', { category: `%${category}%` });
    }

    return query.getMany();
  }
}