import { Test, TestingModule } from '@nestjs/testing';
import { TechsController } from './techs.controller';

describe('TechsController', () => {
  let controller: TechsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TechsController],
    }).compile();

    controller = module.get<TechsController>(TechsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
