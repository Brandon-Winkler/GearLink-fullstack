import { IsDate, IsNotEmpty, IsString, IsStrongPassword } from "class-validator";

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