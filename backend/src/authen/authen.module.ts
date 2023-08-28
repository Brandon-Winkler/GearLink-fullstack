import { Module } from '@nestjs/common';
import { AuthenController } from './authen.controller';
import { AuthenService } from './authen.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [TypeOrmModule.forFeature([User]), PassportModule],
  controllers: [AuthenController],
  providers: [
    {
      provide: 'AUTHEN_SERVICE',
      useClass: AuthenService,
    },
    {
      provide: 'USER_SERVICE',
      useClass: UserService,
    },
    LocalStrategy,
  ],
})
export class AuthenModule {}
