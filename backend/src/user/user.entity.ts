import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Gear } from "src/gear/gear.entity";

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

    @OneToMany(() => Gear, (gear) => gear.user)
    gear: Gear[];

    @CreateDateColumn()
    createdAt: Date;
}