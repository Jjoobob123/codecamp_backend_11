import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CacheModule, CACHE_MANAGER } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { UsersService } from '../user.service';
import { MailerModule, MailerService } from '@nestjs-modules/mailer';
import { Cache } from 'cache-manager';

describe('UsersService', () => {
	let mailerService: MailerService;
	let usersService: UsersService;
	let userRepository: Repository<User>;
	let cacheManager: Cache;

	const mockUserRepository = {
		find: jest.fn(() => []),
	};

	const mockCacheManager = {
		get: jest.fn(),
		set: jest.fn(),
		del: jest.fn(),
	};

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
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
				CacheModule.register({}),
			],
			providers: [
				UsersService,
				{
					provide: getRepositoryToken(User),
					useValue: mockUserRepository,
				},
				{
					provide: CACHE_MANAGER,
					useValue: mockCacheManager,
				},
			],
		}).compile();

		usersService = module.get<UsersService>(UsersService);
		userRepository = module.get<Repository<User>>(getRepositoryToken(User));
		cacheManager = module.get<Cache>(CACHE_MANAGER);
	});

	describe('findAll', () => {
		it('should return an array of users', async () => {
			const result = [new User(), new User()];
			jest.spyOn(userRepository, 'find').mockResolvedValue(result);

			expect(await usersService.findAll()).toBe(result);
			expect(userRepository.find).toHaveBeenCalled();
		});
	});
});
