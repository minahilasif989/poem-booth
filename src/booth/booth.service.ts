import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Booth } from './entities/booth.entity';

@Injectable()
export class BoothService {
  constructor(
    @InjectRepository(Booth)
    private boothRepository: Repository<Booth>,
  ) {}

  // Get all booths
  findAll() {
    return this.boothRepository.find({
      relations: ['collections'],
    });
  }

  // Get one booth
  findOne(id: number) {
    return this.boothRepository.findOne({
      where: { booth_id: id },
      relations: ['collections'],
    });
  }
}