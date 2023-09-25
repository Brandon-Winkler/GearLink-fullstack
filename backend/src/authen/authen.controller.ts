import { Controller, Post, Request, UseGuards, Session, Get, Req } from '@nestjs/common';
import { AuthenGuard, LocalGuard } from './authen.guard';

@Controller('authen')
export class AuthenController {

    @UseGuards(LocalGuard)
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

    @UseGuards(AuthenGuard)
    @Get('status')
    async getAuthStatus(@Req() req) {
        return req.user;
    }
}

