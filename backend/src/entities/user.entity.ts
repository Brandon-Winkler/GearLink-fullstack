import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

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
    firstName: string;

    @Column({
        nullable: true,
        type: 'varchar',
        length: 255,
    })
    lastName: string;

    @Column({
        nullable: false,
        type: 'varchar',
        length: 255,
        unique: true,
    })
    userName: string;

    @Column({
        nullable: false,
        type: 'varchar',
        length: 255,
    })
    password: string;

    @CreateDateColumn()
    createdAt: Date;
}