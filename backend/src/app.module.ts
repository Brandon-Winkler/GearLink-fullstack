import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user/user.controller';
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
  })],
  controllers: [UserController],
  providers: [],
})
export class AppModule {}
