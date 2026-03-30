import { Controller, Get, Param, Query } from '@nestjs/common';
import { PoemService } from './poem.service';

@Controller('poem')
export class PoemController {
  constructor(private readonly poemService: PoemService) {}

  // GET /poem
  @Get()
  findAll() {
    return this.poemService.findAll();
  }

  // GET /poem/search?name=lab&poet=iqbal&collection=bang&category=sufism
  @Get('search')
  search(
    @Query('name') name?: string,
    @Query('poet') poet?: string,
    @Query('collection') collection?: string,
    @Query('category') category?: string,
  ) {
    return this.poemService.search(name, poet, collection, category);
  }

  // GET /poem/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.poemService.findOne(+id);
  }
}