import { IsDate, IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class createEquipmentDto {

    @IsNotEmpty()
    @IsString()
    productName: string;
    
    @IsNumber()
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
    email: string;
    
    @IsString()
    phone: string;
    
    @IsString()
    imageFolderUrl: string;
    
    @IsNotEmpty()
    @IsDate()
    date: string;
}