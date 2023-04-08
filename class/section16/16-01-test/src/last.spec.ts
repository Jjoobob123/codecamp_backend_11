import { UsersService } from '../user.service';
import { Test, TestingModule } from '@nestjs/testing';
import { Cache } from 'cache-manager';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { MailerModule, MailerService } from '@nestjs-modules/mailer';
import { Dog } from 'src/apis/dogs/entities/dog.entity';
import { Reservation } from 'src/apis/reservations/entities/reservation.entity';
import { DogsService } from 'src/apis/dogs/dogs.service';
import { ReservationsService } from 'src/apis/reservations/reservation.service';
import { CacheModule, CACHE_MANAGER } from '@nestjs/common';
import { DOG_TYPE } from 'src/apis/dogs/enum/dog-type.enum';
import { MockUserRepository } from './users.service.content.spec';

const EXAMPLE_ACCESS_TOKEN = 'exampleAccessToken';
const EXAMPLE_AUTH = true;
const EXAMPLE_DOG: Dog = {
  id: 'exampleDogId',
  name: 'exampleDogName',
  age: 11,
  weight: 7,
  breed: DOG_TYPE.LARGE,
  specifics: 'exampleSpecifics',
  image: 'exampleImage',
  createdAt: new Date(),
  deletedAt: new Date(),
  user: null,
  reservation: null,
};
const EXAMPLE_RESERVATION: Reservation = {
  id: 'exampleReservationId',
  date: new Date(),
  time: 'exampleReservationTime',
  shop: null,
  user: null,
  dog: EXAMPLE_DOG,
  createAt: new Date(),
  deleteAt: new Date(),
};

const EXAMPLE_USER: User = {
  id: 'exampleUserId',
  name: 'exampleUserName',
  email: 'a@a.com',
  password: 'exampleUserPassword',
  phone: 'exampleUserPhone',
  image: 'exampleUserImage',
  createAt: new Date(),
  deleteAt: new Date(),
  updateAt: new Date(),
  dogs: [EXAMPLE_DOG],
  reservation: [EXAMPLE_RESERVATION],
};

type MockRepository<T = any> = Partial<Record<keyof Repository<T>, jest.Mock>>;

describe('UsersService', () => {
  let mailerService: MailerService;
  let usersService: UsersService;
  let cache: Cache;
  // let userRepository: Repository<User>;

  let mockUserRepository: MockRepository<User>;
  beforeEach(async () => {
    const usersModule: TestingModule = await Test.createTestingModule({
      imports: [
        MailerModule.forRootAsync({
          useFactory: () => ({
            transport: {
              service: 'Gmail',
              host: process.env.EMAIL_HOST,
              port: Number(process.env.DATABASE_PORT),
              secure: false,
              auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
              },
            },
          }),
        }),
      ],

      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useClass: MockUserRepository,
        },
        // {
        // 	provide: getRepositoryToken(Dog),
        // 	useValue: {},
        // },

        {
          provide: CACHE_MANAGER,
          useValue: {
            get: () => 'any value',
            set: () => jest.fn(),
          },
        },
      ],
    }).compile();

    cache = usersModule.get(CACHE_MANAGER);
    mailerService = usersModule.get<MailerService>(MailerService);
    usersService = usersModule.get<UsersService>(UsersService);
    // usersService = new UsersService(MockRepository);
    mockUserRepository = usersModule.get<MockRepository<User>>(
      getRepositoryToken(User),
    );
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {
      // jest.spyOn(userRepository.find).mockResolvedValue(users);

      const result = await mockUserRepository.find({});

      expect(usersService.findAll()).toStrictEqual(result);
    });
  });
});
