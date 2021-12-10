import { Test, TestingModule } from '@nestjs/testing';
import { SiteAccessController } from './site-access.controller';

describe('SiteAccessController', () => {
  let controller: SiteAccessController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SiteAccessController],
    }).compile();

    controller = module.get<SiteAccessController>(SiteAccessController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
