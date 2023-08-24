import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ImgUrl {
    
    @PrimaryGeneratedColumn({
        type: 'bigint',
        unsigned: true,
    })
    id: number;

    @Column({
        nullable: true,
        type: "varchar",
        length: 255,
    })
    imgFolderUrl: string;
}