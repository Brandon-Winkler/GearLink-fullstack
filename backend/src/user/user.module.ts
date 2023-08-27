import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { Gear } from 'src/gear/gear.entity';

@Module({
    imports: [TypeOrmModule.forFeature([User, Gear])],
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule {}
