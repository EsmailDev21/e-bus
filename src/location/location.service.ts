import { Injectable } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Location, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';

@Injectable()
export class LocationService {
  /**
   *
   */
  constructor(private readonly prismaService:PrismaService) {
    //super();
    
  }
  async create(createLocationDto: Prisma.LocationCreateInput) {
    try {
      return await this.prismaService.location.create(
        {data:createLocationDto}
      )
    } catch (error) {
      throw new BaseExceptionFilter(error)
    }
  }

  async findAll() {
    try {
      return await this.prismaService.location.findMany();
    } catch (error) {
      throw new BaseExceptionFilter(error)
    }
  }

  async findOne(id: string) {
    try {
      return await this.prismaService.location.findUniqueOrThrow({
        where:{id}
      });
    } catch (error) {
      throw new BaseExceptionFilter(error)
    }
  }

  async update(id: string, updateLocationDto: Partial<Location>) {
    try {
      return await this.prismaService.location.update(
        {where:{id},data:updateLocationDto}
      )
    } catch (error) {
      throw new BaseExceptionFilter(error)
    }
  }

  async remove(id: string) {
    try {
      return await this.prismaService.location.delete({where:{id}});
    } catch (error) {
      throw new BaseExceptionFilter(error)
    }
  }
}
