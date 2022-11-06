import { Injectable } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Location, Prisma, Station } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateStationDto } from './dto/create-station.dto';
import { UpdateStationDto } from './dto/update-station.dto';


@Injectable()
export class StationService {
  constructor(private readonly prismaService:PrismaService){}
  async create(createStationDto: Prisma.StationCreateInput) {
    try {
      return await this.prismaService.station.create({
        data:createStationDto
      })
    } catch (error) {
      throw new BaseExceptionFilter(error)
    }
  }

  async createWithLocation(createStationDto: Prisma.StationCreateInput,location : Prisma.LocationCreateInput) {
    try {
      return await this.prismaService.station.create({
        data:{
          location:{
            create:location
          },
          ...createStationDto
        }
      })
    } catch (error) {
      throw new BaseExceptionFilter(error)
    }
  }
  async findAll() {
    try {
      return await this.prismaService.station.findMany();
    } catch (error) {
      throw new BaseExceptionFilter(error);
    }
  }

  async findOne(id: string) {
    try {
      return await this.prismaService.station.findUniqueOrThrow({where:{id}});
    } catch (error) {
      console.log(error)
    }
  }

  async update(id: string, updateStationDto: Partial<Station>) {
    try {
      return await this.prismaService.station.update({
        where:{id},
        data:updateStationDto
      })
    } catch (error) {
      throw new BaseExceptionFilter(error)
    }
  }

  async remove(id: string) {
    try {
      return await this.prismaService.station.delete({where:{id}})
    } catch (error) {
      throw new BaseExceptionFilter(error)
    }
  }
}
