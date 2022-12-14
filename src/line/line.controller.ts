import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LineService } from './line.service';
import { CreateLineDto } from './dto/create-line.dto';
import { UpdateLineDto } from './dto/update-line.dto';
import { Line, Prisma } from '@prisma/client';

@Controller('line')
export class LineController {
  constructor(private readonly lineService: LineService) {}

  @Post()
  async create(@Body() createLineDto: Prisma.LineCreateInput,@Body() arrive:Prisma.StationCreateInput,
  @Body() departure:Prisma.StationCreateInput) {
    return await this.lineService.create(createLineDto,arrive,departure);
  }

  @Get()
  async findAll() {
    return await this.lineService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.lineService.findOne(id);
  }
  @Get('/route/:id')
  async getRoute(@Param('id') id: string) {
    return await this.lineService.getRoute(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateLineDto: Partial<Line>) {
    return this.lineService.update(id, updateLineDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.lineService.remove(id);
  }
}
