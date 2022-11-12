import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VoyageService } from './voyage.service';
import { CreateVoyageDto } from './dto/create-voyage.dto';
import { UpdateVoyageDto } from './dto/update-voyage.dto';
import { Prisma, Voyage } from '@prisma/client';

@Controller('voyage')
export class VoyageController {
  constructor(private readonly voyageService: VoyageService) {}

  @Post()
  async create(@Body() createVoyageDto: Prisma.VoyageCreateInput) {
    return await this.voyageService.create(createVoyageDto);
  }

  @Get()
 async findAll() {
    return await this.voyageService.findAll();
  }

  @Get(':id')
 async findOne(@Param('id') id: string) {
    return await this.voyageService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateVoyageDto: Partial<Voyage>) {
    return await  this.voyageService.update(id, updateVoyageDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.voyageService.remove(id);
  }
}
