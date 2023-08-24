import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gear } from 'src/entities/gear.entity';
import { GearController } from 'src/controllers/gear.controller';
import { GearService } from 'src/services/gear.service';

@Module({
    imports: [TypeOrmModule.forFeature([Gear])],
    controllers: [GearController],
    providers: [GearService],
})
export class GearModule {}
