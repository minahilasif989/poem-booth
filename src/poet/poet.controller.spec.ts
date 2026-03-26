import { Test, TestingModule } from '@nestjs/testing';
import { PoetController } from './poet.controller';
import { PoetService } from './poet.service';

describe('PoetController', () => {
  let controller: PoetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PoetController],
      providers: [PoetService],
    }).compile();

    controller = module.get<PoetController>(PoetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
