import { IsAlpha, IsNotEmpty, IsString, IsStrongPassword, isString } from "class-validator";

export class createUserDto {

    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    @IsNotEmpty()
    @IsString()
    userName: string;

    @IsNotEmpty()
    @IsStrongPassword()
    password: string;
}