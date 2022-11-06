import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StationService } from './station.service';
import { CreateStationDto } from './dto/create-station.dto';
import { UpdateStationDto } from './dto/update-station.dto';
import { Prisma, Station } from '@prisma/client';

@Controller('station')
export class StationController {
  constructor(private readonly stationService: StationService) {}

  @Post()
  async create(@Body() createStationDto: Prisma.StationCreateInput) {
    return await this.stationService.create(createStationDto);
  }
  @Post("/with-location")
  async createWithLocation(@Body() createStationDto: Prisma.StationCreateInput,@Body() location:Prisma.LocationCreateInput) {
    return await this.stationService.createWithLocation(createStationDto,location);
  }

  @Get()
  async findAll() {
    return await this.stationService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.stationService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateStationDto: Partial<Station>) {
    return await this.stationService.update(id, updateStationDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.stationService.remove(id);
  }
}
