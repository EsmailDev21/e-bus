import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Bus, Prisma } from '@prisma/client';
import { BusService } from './bus.service';
import { CreateBusDto } from './dto/create-bus.dto';
import { UpdateBusDto } from './dto/update-bus.dto';

@Controller('bus')
export class BusController {
  constructor(private readonly busService: BusService) {}

  @Post()
  async create(@Body() createBusDto: Prisma.BusCreateInput) {
    return await this.busService.create(createBusDto);
  }

  @Get()
  async findAll() {
    return await this.busService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.busService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateBusDto: Partial<Bus>) {
    return this.busService.update(id, updateBusDto);
  }

  @Delete(':id')
 async  remove(@Param('id') id: string) {
    return await this.busService.remove(id);
  }
}
