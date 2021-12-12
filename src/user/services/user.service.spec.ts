import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { UserReturnAdapter } from '../adapters/user-return.adapter';
import { UserDto } from '../dto/user.dto';
import { User } from '../models/user.model';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  const createUserDto: UserDto = {
    name: 'Bruna S. G. R. S.',
    password: '123',
    email: 'asdasdasd@gas.asd',
    username: 'Bruna 3',
  };

  const createdUserDto: UserDto = {
    _id: '61b5c9104608bc66f661ec60',
    name: 'Bruna S. G. R. S.',
    password: undefined,
    email: 'asdasdasd@gas.asd',
    username: 'Bruna 3',
  };

  const mockUser: UserReturnAdapter = {
    id: '61b5c9104608bc66f661ec60',
    name: 'Bruna S. G. R. S.',
    email: 'asdasdasd@gas.asd',
    username: 'Bruna 3',
  };

  class UseMock {
    static findById = () => createdUserDto;
    static findOne = () => createdUserDto;
    save = () => createdUserDto;
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getModelToken(User.name),
          useValue: UseMock,
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be create', async () => {
    const user = await service.create(createUserDto);
    expect(user.id).toEqual(mockUser.id);
  });

  it('should be hide password on create', async () => {
    const user = await service.create(createUserDto);
    expect(user['password']).toBeUndefined();
  });

  it('should be find user id', async () => {
    const user = await service.getById(mockUser.id);
    expect(user.id).toEqual(mockUser.id);
  });

  it('should be find one user', async () => {
    const user = await service.getOne({});
    expect(user.id).toEqual(mockUser.id);
  });
});
