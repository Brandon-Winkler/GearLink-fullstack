import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { createUserDto } from './create-user.dto';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User) private userRepo: Repository<User>
    ) {}

    createUser(userDetails: createUserDto) {
        const newUser = this.userRepo.create({...userDetails, createdAt: new Date()});
        return this.userRepo.save(newUser);
    }
}
