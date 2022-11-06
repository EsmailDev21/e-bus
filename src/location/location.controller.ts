import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LocationService } from './location.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { Location, Prisma } from '@prisma/client';

@Controller('location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Post()
  async create(@Body() createLocationDto: Prisma.LocationCreateInput) {
    return await this.locationService.create(createLocationDto);
  }

  @Get()
  async findAll() {
    return await this.locationService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.locationService.findOne(id);
  }

  @Patch(':id')
  async  update(@Param('id') id: string, @Body() updateLocationDto: Partial<Location>) {
    return await this.locationService.update(id, updateLocationDto);
  }

  @Delete(':id')
  async  remove(@Param('id') id: string) {
    return await this.locationService.remove(id);
  }
}
