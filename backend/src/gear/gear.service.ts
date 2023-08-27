import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Gear } from '../gear/gear.entity';
import { Repository } from 'typeorm';
import { createGearDto } from '../gear/create-gear.dto';

@Injectable()
export class GearService {

    constructor(
        @InjectRepository(Gear) private gearRepo: Repository<Gear>
    ) {}

    createGear(gearDetails: createGearDto) {
        const newGear = this.gearRepo.create({...gearDetails, createdAt: new Date()});
        return this.gearRepo.save(newGear);
    }

    getAllGear() {
        return this.gearRepo.find();
    }

    deleteGear(id: number) {
        return this.gearRepo.delete({id});
    }
}
