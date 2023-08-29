import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthenService } from "./authen.service";
import { User } from "src/user/user.entity";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(
        @Inject('AUTHEN_SERVICE') private readonly authenService: AuthenService
    ) {
        super({
            userNameField: 'userName',
            passwordField: 'password',
        });
    }

    async validate(userName: string, password: string): Promise<any> {
        console.log("inside validate local strategy");
        const user = await this.authenService.validateUser(userName, password);
        if(!user) throw new UnauthorizedException();   
        console.log('success user found!')
        return user;
    }
}
