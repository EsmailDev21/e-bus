import { Injectable, UnauthorizedException } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Line, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateLineDto } from './dto/create-line.dto';
import { UpdateLineDto } from './dto/update-line.dto';

@Injectable()
export class LineService {
  /**
   *
   */
  constructor(private readonly prismaService : PrismaService) {
    //super();
    
  }
  async create(createLineDto: Prisma.LineCreateInput,
    arrive:Prisma.StationCreateInput,
    departure:Prisma.StationCreateInput,

    ):Promise<Line> {
    try {
      return await this.prismaService.line.create({
        data:createLineDto
      })
    } catch (error) {
      console.log(error)
    }
  }

  async findAll():Promise<Line[]> {
    try {
      return await this.prismaService.line.findMany();
    } catch (error) {
      throw new BaseExceptionFilter(error)
    }
  }

  async findOne(id: string):Promise<Line> {
    try {
      return await this.prismaService.line.findUniqueOrThrow({
        where:{
          id:id
        }
      })
    } catch (error) {
      throw new BaseExceptionFilter(error);
    }
  }

  async update(id: string, updateLineDto: Partial<Line>) {
    try {
      return await this.prismaService.line.update({
        where:{
          id:id
        },
        data:updateLineDto
      })
    } catch (error) {
      throw new BaseExceptionFilter(error)
    }
  }

  async remove(id: string) {
    try {
      return await this.prismaService.line.delete(
        {
          where:{
            id:id
          }
        }
      )
    } catch (error) {
      throw new BaseExceptionFilter(error)
    }
  }
}
