import { Injectable } from '@nestjs/common';
import { Bus, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBusDto } from './dto/create-bus.dto';
import { UpdateBusDto } from './dto/update-bus.dto';

@Injectable()
export class BusService {
  /**
   *
   */
  constructor(private readonly prismaService:PrismaService) {
    //super();
    
  }
  async create(createBusDto: Prisma.BusCreateInput) {
    return await this.prismaService.bus.create({
      data:createBusDto
    })
  }

  async findAll() {
    return this.prismaService.bus.findMany();
  }

  async findOne(id: string) {
    return await this.prismaService.bus.findUniqueOrThrow({
      where:{
        id:id
      }
    })
  }

  async update(id: string, updateBusDto: Partial<Bus>) {
    return await this.prismaService.bus.update({
      where:{
        id:id
      },
      data : updateBusDto
    })
  }

  async remove(id: string) {
    return await this.prismaService.bus.delete({where:{id:id}})
  }
}
