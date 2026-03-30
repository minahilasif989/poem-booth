import { Controller, Get, Param, Query } from '@nestjs/common';
import { PoetService } from './poet.service';

@Controller('poet')
export class PoetController {
  constructor(private readonly poetService: PoetService) {}

  // GET /poet
  @Get()
  findAll() {
    return this.poetService.findAll();
  }

  // GET /poet/search?name=iqbal
  @Get('search')
  search(@Query('name') name?: string) {
    return this.poetService.search(name);
  }

  // GET /poet/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.poetService.findOne(+id);
  }
}