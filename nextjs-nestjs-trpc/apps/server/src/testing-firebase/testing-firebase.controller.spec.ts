import { Test, TestingModule } from '@nestjs/testing';
import { TestingFirebaseController } from './testing-firebase.controller';

describe('TestingFirebaseController', () => {
  let controller: TestingFirebaseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestingFirebaseController],
    }).compile();

    controller = module.get<TestingFirebaseController>(TestingFirebaseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
