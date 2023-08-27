import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gear } from './gear.entity';
import { GearController } from './gear.controller';
import { GearService } from './gear.service';
import { ImgUrl } from 'src/ImgUrl/ImgUrl.entity';
@Module({
    imports: [TypeOrmModule.forFeature([Gear, ImgUrl])],
    controllers: [GearController],
    providers: [GearService],
})
export class GearModule {}
