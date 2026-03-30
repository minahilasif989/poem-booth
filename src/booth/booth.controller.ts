import { Controller, Get, Param } from '@nestjs/common';
import { BoothService } from './booth.service';

@Controller('booth')
export class BoothController {
  constructor(private readonly boothService: BoothService) {}

  // GET /booth
  @Get()
  findAll() {
    return this.boothService.findAll();
  }

  // GET /booth/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.boothService.findOne(+id);
  }
}