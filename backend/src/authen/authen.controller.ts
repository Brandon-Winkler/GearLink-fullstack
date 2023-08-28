import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('authen')
export class AuthenController {

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async userLogin(@Request() req) {
        return req.user;
    }
}
