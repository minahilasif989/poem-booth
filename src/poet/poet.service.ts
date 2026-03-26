import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Poet } from './entities/poet.entity';

@Injectable()
export class PoetService {
  constructor(
    @InjectRepository(Poet)
    private poetRepository: Repository<Poet>,
  ) {}

  // Get all poets
  findAll() {
    return this.poetRepository.find({
      relations: ['poems', 'collections'],
    });
  }

  // Get one poet
  findOne(id: number) {
    return this.poetRepository.findOne({
      where: { poet_id: id },
      relations: ['poems', 'collections'],
    });
  }

  // Search poets
  async search(name?: string) {
    const query = this.poetRepository
      .createQueryBuilder('poet')
      .leftJoinAndSelect('poet.poems', 'poems')
      .leftJoinAndSelect('poet.collections', 'collections');

    if (name) {
      query.andWhere('poet.name ILIKE :name', { name: `%${name}%` });
    }

    return query.getMany();
  }
}