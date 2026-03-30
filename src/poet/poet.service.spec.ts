import { Test, TestingModule } from '@nestjs/testing';
import { PoetService } from './poet.service';

describe('PoetService', () => {
  let service: PoetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PoetService],
    }).compile();

    service = module.get<PoetService>(PoetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
