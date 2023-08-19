import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { createUserDto } from './create-user.dto';

@Controller('user')
export class UserController {

    @Post('create')
    @UsePipes(new ValidationPipe())
    createUser(@Body() userData: createUserDto) {
        console.log(userData);
        return {};
    }
}
