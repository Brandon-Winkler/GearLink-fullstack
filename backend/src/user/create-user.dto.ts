import { IsNotEmpty, IsOptional, IsString, IsStrongPassword } from "class-validator";

export class createUserDto {

    @IsString()
    @IsOptional()
    firstName: string;

    @IsString()
    @IsOptional()
    lastName: string;

    @IsNotEmpty()
    @IsString()
    userName: string;

    @IsNotEmpty()
    @IsStrongPassword()
    password: string;
}