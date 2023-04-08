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

class mockUserRepository {
	// async findOne(id) {
	// 	const user: User = new User();
	// 	user.id = id;
	// 	return await user;
	// }
	mydb = [
		{
			name: '조주현',
			email: 'code@gmail.com',
			password: 'asd2qwe123',
			phone: '01012341234',
		},
		{
			name: '태윤',
			email: '123cc@naver.com',
			password: 'qaz123edd!',
			phone: '01012345678',
		},
	];

	save({ name, email, password, phone }) {
		this.mydb.push({ name, email, password, phone });
		return { name, email, password, phone };
	}
}

type MockRepository<T = any> = Partial<Record<keyof Repository<T>, jest.Mock>>;

describe('UsersService', () => {
	let mailerService: MailerService;
	let usersService: UsersService;
	let cache: Cache;

	// let userRepository: Repository<User>;
	let userRepository: MockRepository<User>;

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
					useClass: mockUserRepository,
					// Repository,
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
		userRepository = usersModule.get(getRepositoryToken(User));

		// usersService = new UsersService(mockRepository);

		// userRepository = usersModule.get<Repository<User>>(
		// 	getRepositoryToken(User),
		// );
	});

	// describe('findOne', () => {
	// 	it('전체 조회하기', () => {
	// 		expect(usersService);
	// 	});
	// });
	// it('should be defined', () => {
	// 	expect(mailerService).toBeDefined();
	// });

	// it('cache manager should be available', () => {
	// 	expect(cache).toBeDefined();
	// });

	describe('findAll', () => {
		const users: User[] = [
			{
				id: '1',
				name: '조주현',
				email: 'code@gmail.com',
				password: 'asd2qwe123',
				// phone: '01012341234',
				image: 'groo',
				createAt: new Date(),
				deleteAt: null,
				updateAt: null,
				dogs: null,
				reservation: null,
			},
			{
				id: '2',
				name: '김태윤',
				email: 'camp@naver.com',
				password: 'wn2wn123!@',
				// phone: '01012345678',
				image: 'meong',
				createAt: new Date(),
				deleteAt: null,
				updateAt: null,
				dogs: null,
				reservation: null,
			},
		];
		it('should return an array of users', async () => {
			jest.spyOn(userRepository, 'find').mockResolvedValue(users);

			const result = await usersService.findAll();

			expect(result).toStrictEqual(users);
		});
	});

	describe('findOne', () => {
		it('should return a user with reservations when given a valid user id', async () => {
			// given
			const validUserId = '1';
			const expectedUser: User = {
				id: validUserId,
				name: 'John',
				email: 'john@example.com',
				reservation: [
					{
						id: '1',
						date: null,
						// userId: validUserId,
						time: '18:00',
						shop: null,
						user: {
							id: validUserId,
							// id: '2',
							// name: '김태윤',
							// email: 'camp@naver.com',
							// password: 'wn2wn123!@',
							// // phone: '01012345678',
							// image: 'meong',
							// createAt: new Date(),
							// deleteAt: null,
							// updateAt: null,
							// dogs: null,
							// reservation: null,
						},
						dog: null,
						deleteAt: null,
					},
					{
						id: '2',
						date: null,
						// userId: validUserId,
						time: '18:00',
						shop: null,
						user: null,
						dog: null,
						deleteAt: null,
					},
				],
			};

			// when
			const actualUser = await usersService.findOne({ userId: validUserId });

			// then
			expect(actualUser).toEqual(expectedUser);
		});

		it('should return null when given an invalid user id', async () => {
			// given
			const invalidUserId = '999';

			// when
			const actualUser = await usersService.findOne({ userId: invalidUserId });

			// then
			expect(actualUser).toBeNull();
		});
	});
});
