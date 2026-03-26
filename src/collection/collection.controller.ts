import { Controller, Get, Param, Query } from '@nestjs/common';
import { CollectionService } from './collection.service';

@Controller('collection')
export class CollectionController {
  constructor(private readonly collectionService: CollectionService) {}

  // GET /collection
  @Get()
  findAll() {
    return this.collectionService.findAll();
  }

  // GET /collection/search?name=bang&category=sufism
  @Get('search')
  search(
    @Query('name') name?: string,
    @Query('category') category?: string,
  ) {
    return this.collectionService.search(name, category);
  }

  // GET /collection/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.collectionService.findOne(+id);
  }
}