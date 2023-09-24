import { Module } from '@nestjs/common';
import { AuthenController } from './authen.controller';
import { AuthenService } from './authen.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { SessionSerializer } from './session.serializer';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]), 
    PassportModule.register({
      session: true,
    }),
  ],
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
    SessionSerializer,
  ],
})
export class AuthenModule {}
