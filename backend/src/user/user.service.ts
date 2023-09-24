import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';
import { createUserDto } from '../user/create-user.dto';
import { encodePassword } from 'src/bcrypt';

@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private readonly userRepo: Repository<User>) {}

    createUser(userDetails: createUserDto) {
        const password = encodePassword(userDetails.password);
        const newUser = this.userRepo.create({...userDetails, password, createdAt: new Date()});
        return this.userRepo.save(newUser);
    }

    async findUserByUsername(userName: string) {
        console.log('inside findUserByUsername')
        return this.userRepo.findOneBy({userName});
    }

    findUserById(id: number) {
        return this.userRepo.findOneBy({id});
    }
}
