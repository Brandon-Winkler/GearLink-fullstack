import { Inject, Injectable } from '@nestjs/common';
import { comparePasswords } from 'src/bcrypt';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthenService {
    constructor(@Inject('USER_SERVICE') private readonly userService: UserService) {}

    async validateUser(userName: string, password: string) {
        console.log('inside validate user');
        const userDB = await this.userService.findUserByUsername(userName);
        if(userDB) {
            console.log('did we find the user?')
            const matched = comparePasswords(password, userDB.password);
            console.log('successful password match!')
            if(matched) {
                return userDB;
            } 
        }
        console.log('user validation failed');
        return null;
    }
}
