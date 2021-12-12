import { Test, TestingModule } from '@nestjs/testing';
import { UserReturnAdapter } from './adapters/user-return.adapter';
import { UserDto } from './dto/user.dto';
import { UserService } from './services/user.service';
import { UserController } from './user.controller';

describe('UserController', () => {
  let controller: UserController;
  let service: UserService;

  const createUserDto: UserDto = {
    name: 'Bruna S. G. R. S.',
    password: '123',
    email: 'asdasdasd@gas.asd',
    username: 'Bruna 3',
  };

  const mockUser: UserReturnAdapter = {
    id: '61b5c9104608bc66f661ec60',
    name: 'Bruna S. G. R. S.',
    email: 'asdasdasd@gas.asd',
    username: 'Bruna 3',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: UserService,
          useValue: {
            getById: jest.fn().mockResolvedValue(mockUser),
            getOne: jest.fn().mockResolvedValue(mockUser),
            create: jest.fn().mockResolvedValue(mockUser),
          },
        },
      ],
    }).compile();

    controller = module.get<UserController>(UserController);
    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should be defined service', () => {
    expect(service).toBeDefined();
  });

  it('should be create user', async () => {
    const user = await controller.create(createUserDto);
    expect(user.id).toEqual(mockUser.id);
  });

  it('should be find user by id', async () => {
    const user = await controller.getById(mockUser.id);
    expect(user.id).toEqual(mockUser.id);
  });

  it('should be find one user', async () => {
    const user = await controller.getOne({});
    expect(user.id).toEqual(mockUser.id);
  });
});
