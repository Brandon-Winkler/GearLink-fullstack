import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { createUserDto } from 'src/user/create-user.dto';

@Controller('user')
export class UserController {

    constructor(private userService: UserService) {} 

    @Post('create')
    @UsePipes(new ValidationPipe())
    createUser(@Body() userData: createUserDto) {
        this.userService.createUser(userData);
    }
}
