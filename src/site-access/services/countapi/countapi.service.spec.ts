import { Test, TestingModule } from '@nestjs/testing';
import { CountapiService } from './countapi.service';

describe('CountapiService', () => {
  let service: CountapiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CountapiService],
    }).compile();

    service = module.get<CountapiService>(CountapiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
