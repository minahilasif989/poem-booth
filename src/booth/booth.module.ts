import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoothService } from './booth.service';
import { BoothController } from './booth.controller';
import { Booth } from './entities/booth.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Booth])],
  controllers: [BoothController],
  providers: [BoothService],
})
export class BoothModule {}