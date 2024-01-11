import { ISession } from "connect-typeorm";
import { Column, Entity, Index, PrimaryColumn, DeleteDateColumn } from "typeorm";

@Entity({name: 'sessions'})
export class SessionEntity implements ISession {

    @Index()
    @Column('bigint')
    public expiredAt: number = Date.now();
    
    @PrimaryColumn('varchar', {length:255})
    id: string;

    @Column('text')
    json: string;

    @DeleteDateColumn({ name: 'deletedAt' })
    deletedAt?: Date;
}