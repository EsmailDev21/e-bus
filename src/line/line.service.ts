import { Injectable, UnauthorizedException } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Line, Location, Prisma } from '@prisma/client';
import { LocationService } from 'src/location/location.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { StationService } from 'src/station/station.service';
import { CreateLineDto } from './dto/create-line.dto';
import { UpdateLineDto } from './dto/update-line.dto';

@Injectable()
export class LineService {
  /**
   *
   */
  constructor(
    private readonly prismaService: PrismaService,  ) {
    //super();
  }
  async create(
    createLineDto: Prisma.LineCreateInput,
    arrive: Prisma.StationCreateInput,
    departure: Prisma.StationCreateInput,
  ): Promise<Line> {
    try {
      return await this.prismaService.line.create({
        data: createLineDto,
      });

    } catch (error) {
      console.log(error);
    }
  }

  async findAll(): Promise<Line[]> {
    try {
      return await this.prismaService.line.findMany();
    } catch (error) {
      throw new BaseExceptionFilter(error);
    }
  }
  async getRoute(id:string) : Promise<Location[]>{
    const line = await this.findOne(id);
    const startStation = await this.prismaService.station.findFirst({
      where:{
        departureLines:{every:{id:line.id}}
      }
    })
    const arriveStation = await this.prismaService.station.findFirst({
      where:{
        arriveLines:{every:{id:line.id}}
      }
    })
    const depLocation = await this.prismaService.location.findFirst({where:{station:{
      id:startStation.id  
    }}})
    const arrLocation = await this.prismaService.location.findFirst({where:{station:{id:arriveStation.id}}})
    return [depLocation,arrLocation]
  }

  async findOne(id: string): Promise<Line> {
    try {
      return await this.prismaService.line.findUniqueOrThrow({
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw new BaseExceptionFilter(error);
    }
  }

  async update(id: string, updateLineDto: Partial<Line>) {
    try {
      return await this.prismaService.line.update({
        where: {
          id: id,
        },
        data: updateLineDto,
      });
    } catch (error) {
      throw new BaseExceptionFilter(error);
    }
  }

  async remove(id: string) {
    try {
      return await this.prismaService.line.delete({
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw new BaseExceptionFilter(error);
    }
  }
}
