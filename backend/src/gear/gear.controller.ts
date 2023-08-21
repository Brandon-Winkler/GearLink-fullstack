import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { createGearDto } from './create-gear.dto';
import { GearService } from './gear.service';

@Controller('gear')
export class GearController {

    constructor(private gearService: GearService) {}

    @Post('create')
    @UsePipes(new ValidationPipe())
    createGear(@Body() gearData: createGearDto) {
        this.gearService.createGear(gearData);
    }
}
