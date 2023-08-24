import { IsString } from "class-validator"

export class createImgUrlDto {

    @IsString()
    imgFolderUrl: string;
}