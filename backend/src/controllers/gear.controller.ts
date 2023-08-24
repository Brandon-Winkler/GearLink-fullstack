import { Body, Controller, Post, UsePipes, ValidationPipe, Get } from '@nestjs/common';
import { createGearDto } from 'src/dtos/create-gear.dto';
import { GearService } from 'src/services/gear.service';

@Controller('gear')
export class GearController {

    constructor(private gearService: GearService) {}

    @Post('create')
    @UsePipes(new ValidationPipe())
    createGear(@Body() gearData: createGearDto) {
        this.gearService.createGear(gearData);
    }

    @Get('get-all')
    async getGear() {
        const gear = await this.gearService.getAllGear();
        return gear;
    }
}
