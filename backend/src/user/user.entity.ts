import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn({
        type: 'bigint',
        unsigned: true,
    })
    id: number;

    @Column({
        nullable: true,
        type: 'varchar',
        length: 255,
    })
    FirstName: string;

    @Column({
        nullable: true,
        type: 'varchar',
        length: 255,
    })
    LastName: string;

    @Column({
        nullable: false,
        type: 'varchar',
        length: 255,
        unique: true,
    })
    UserName: string;

    @Column({
        nullable: false,
        type: 'varchar',
        length: 255,
    })
    Password: string;

    @Column()
    createdAt: Date;
}