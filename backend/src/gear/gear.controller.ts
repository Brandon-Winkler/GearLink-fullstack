import { Body, Controller, Post, UsePipes, ValidationPipe, Get, Delete, Param, ParseIntPipe } from '@nestjs/common';
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

    @Get('get-all')
    async getGear() {
        const gear = await this.gearService.getAllGear();
        return gear;
    }

    @Delete('delete/:id')
    async deleteGearById(@Param('id', ParseIntPipe) id: number) {
        await this.gearService.deleteGear(id);
    }
}
