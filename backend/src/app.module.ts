import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { GearModule } from './gear/gear.module';
import { AuthenModule } from './authen/authen.module';
import 'dotenv/config'
import { dataSourceOptions } from 'database/db.source';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions), 
    UserModule, 
    GearModule, 
    AuthenModule,
    PassportModule.register({
      session: true,
    })
  ],
})
export class AppModule {}
