import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PoetService } from './poet.service';
import { PoetController } from './poet.controller';
import { Poet } from './entities/poet.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Poet])],
  controllers: [PoetController],
  providers: [PoetService],
})
export class PoetModule {}