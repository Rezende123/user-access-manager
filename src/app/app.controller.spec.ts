import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return Status Message', () => {
      const status = appController.getAppStatus();
      const expectedMessage = 'A API está funcionando desde';

      expect(status && status.message.includes(expectedMessage)).toBeTruthy();
    });
  });
});
