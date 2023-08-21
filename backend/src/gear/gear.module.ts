import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gear } from './gear.entity';
import { GearController } from './gear.controller';
import { GearService } from './gear.service';

@Module({
    imports: [TypeOrmModule.forFeature([Gear])],
    controllers: [GearController],
    providers: [GearService],
})
export class GearModule {}
