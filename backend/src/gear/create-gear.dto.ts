import { IsEmail, IsNotEmpty, IsNumber, IsString, IsOptional } from "class-validator";

export class createGearDto {

    @IsNotEmpty()
    @IsString()
    productName: string;
    
    @IsNumber()
    @IsOptional()
    price: number;
    
    @IsString()
    @IsOptional()
    category: string;
    
    @IsString()
    @IsOptional()
    brand: string;
    
    @IsString()
    @IsOptional()
    condition: string;
    
    @IsString()
    @IsOptional()
    city: string;
    
    @IsString()
    @IsOptional()
    zip: string;
    
    @IsString()
    @IsOptional()
    description: string;
    
    @IsEmail()
    @IsOptional()
    email: string;
    
    @IsString()
    @IsOptional()
    phone: string;
    
    @IsString()
    @IsOptional()
    imageFolderUrl: string;
}