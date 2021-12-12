import { Test, TestingModule } from '@nestjs/testing';
import { HitAdapter } from './adapters/hit.adapter';
import { CountapiService } from './services/countapi/countapi.service';
import { SiteAccessController } from './site-access.controller';

describe('SiteAccessController', () => {
  let controller: SiteAccessController;
  const hitsDefault = { value: 5 };
  const hitsIncreaseDefault = { value: hitsDefault.value + 1 };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SiteAccessController],
      providers: [
        {
          provide: CountapiService,
          useValue: {
            hit: jest
              .fn()
              .mockResolvedValue(new HitAdapter(hitsIncreaseDefault)),
            hits: jest.fn().mockResolvedValue(new HitAdapter(hitsDefault)),
          },
        },
      ],
    }).compile();

    controller = module.get<SiteAccessController>(SiteAccessController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should be amount hits', async () => {
    const hit = await controller.amount();
    expect(hit.acessos).toEqual(hitsDefault.value);
  });

  it('should be increase hits', async () => {
    const hit = await controller.increase();
    expect(hit.acessos).toEqual(hitsIncreaseDefault.value);
  });
});
