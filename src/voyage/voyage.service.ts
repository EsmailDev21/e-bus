import { Injectable } from '@nestjs/common';
import { Prisma, Voyage } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateVoyageDto } from './dto/create-voyage.dto';
import { UpdateVoyageDto } from './dto/update-voyage.dto';

@Injectable()
export class VoyageService {
  /**
   *
   */
  constructor(private readonly prismaService : PrismaService) {
    //super();
    
  }
  async create(createVoyageDto: Prisma.VoyageCreateInput) {
    return await this.prismaService.voyage.create({data:createVoyageDto})
  }

  async findAll() {
    return await this.prismaService.voyage.findMany(); 
  }

  async findOne(id: string) {
    return await this.prismaService.voyage.findUniqueOrThrow({where:{id:id}})
  }

  async update(id: string, updateVoyageDto: Partial<Voyage>) {
    return await this.prismaService.voyage.update({where:{id:id},data:updateVoyageDto})
  }

  async remove(id: string) {
    return await this.prismaService.voyage.delete({where:{id:id}})
  }
}
