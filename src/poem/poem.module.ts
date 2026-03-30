import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PoemService } from './poem.service';
import { PoemController } from './poem.controller';
import { Poem } from './entities/poem.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Poem])],
  controllers: [PoemController],
  providers: [PoemService],
})
export class PoemModule {}