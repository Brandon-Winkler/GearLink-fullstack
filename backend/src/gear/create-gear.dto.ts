import { IsEmail, IsNotEmpty, IsNumber, IsString, IsOptional } from "class-validator";

export class createGearDto {

    @IsNotEmpty()
    @IsString()
    productName: string;
    
    @IsNumber()
    @IsOptional()
    price: number;
    
    @IsString()
    category: string;
    
    @IsString()
    brand: string;
    
    @IsString()
    condition: string;
    
    @IsString()
    city: string;
    
    @IsString()
    zip: string;
    
    @IsString()
    description: string;
    
    @IsEmail()
    @IsOptional()
    email: string;
    
    @IsString()
    phone: string;
    
    @IsString()
    imageFolderUrl: string;
}