import { Inject } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";
import { User } from "src/user/user.entity";
import { UserService } from "src/user/user.service";

export class SessionSerializer extends PassportSerializer {
    constructor(
        @Inject('USER_SERVICE') private readonly userService: UserService,
        
    ) {
        super();
    }

    serializeUser(user: User, done: Function) {
        console.log("Serialize User");
        done(null, user);
    }
    
    async deserializeUser(user: User, done: Function) {
        console.log("Deserialize User");
        const userDB = await(this.userService.findUserById(user.id));
        return userDB ? done(null, userDB) : done(null, null);
    }
}