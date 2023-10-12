import { ISession } from "connect-typeorm";
import { Column, Entity, Index, PrimaryColumn } from "typeorm";

@Entity({name: 'sessions'})
export class SessionEntity implements ISession {

    @Index()
    @Column('bigint')
    public expiredAt: number = Date.now();
    
    @PrimaryColumn()
    id: string = "";

    @Column()
    json: string = "";
}