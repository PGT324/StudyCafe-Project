import { Test } from '@nestjs/testing';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import { UsersService } from '../users.service';
import { ConflictException } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../entities/user.entity';

// 나만의 데이터베이스 만들기
class MockUsersRepository {
  mydb = [
    {
      userPhone: '01046649194',
      userPassword: '12345',
      userName: '이순신',
      userNickname: '장군',
    },
    {
      userPhone: '01012345678',
      userPassword: '12345',
      userName: '김철수',
      userNickname: '철수',
    },
  ];
  findOne({ where }) {
    const user = this.mydb.filter((el) => el.userPhone === where.userPhone);
    if (user.length) {
      return user[0];
    }
    return null;
  }

  save(createuserDto: CreateUserDto) {
    this.mydb.push(createuserDto);
    return createuserDto;
  }
}

describe('UsersService', () => {
  let usersService: UsersService;
  beforeEach(async () => {
    const usersModule = await Test.createTestingModule({
      //   imports: [
      //     TypeOrmModule.forFeature([
      //       User,
      //       Todo,
      //       Coupon, //
      //     ]),
      //   ],
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useClass: MockUsersRepository,
        }, //
      ],
    }).compile();

    usersService = usersModule.get<UsersService>(UsersService);
  });

  //   describe('fetchUserByPhone', () => {
  //     const result = usersService.fetchUserByPhone('010-4664-9194');
  //     expect(result).toStrictEqual({
  //       // 객체 비교할때 사용
  //       userPhone: '010-4664-9194',
  //       userName: '김철수',
  //     });
  //   });

  describe('signUp', () => {
    it('이미 존재하는 이메일 검증하기', async () => {
      const myData = {
        userName: '김철수',
        userNickname: '철수',
        userPhone: '010-4664-9194',
        userPassword: '12345',
      };
      try {
        await usersService.signUp(myData);
      } catch (error) {
        expect(error).toBeInstanceOf(ConflictException);
      }
    });

    it('회원 등록 잘 됐는지 검증', async () => {
      const myData = {
        userName: '김철수',
        userNickname: '철수',
        userPhone: '010-4664-9194',
        userPassword: '12345',
      };

      const result = await usersService.signUp(myData);
      expect(result).toStrictEqual({
        userName: '김철수',
        userNickname: '철수',
        userPhone: '010-4664-9194',
        userPassword: '12345',
      });
    });
  });
});
