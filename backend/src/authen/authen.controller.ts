import { Controller, Post, Request, UseGuards, Session, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthenGuard } from './authen.guard';

@Controller('authen')
export class AuthenController {

    @UseGuards(AuthenGuard)
    @Post('login')
    async userLogin(@Request() req) {
        return req.user;
    }

    @Get('sessionId')
    async getAuthSession(@Session() session: Record<string, any>) {
        console.log(session);
        console.log(session.id);
        session.authenticated = true;
        return session;
    }
}

