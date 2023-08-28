import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { GearModule } from './gear/gear.module';
import { AuthenModule } from './authen/authen.module';
import entities from '.';
import 'dotenv/config'

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: entities,
    synchronize: true,
  }), UserModule, GearModule, AuthenModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
