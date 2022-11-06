import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {Prisma, User} from "@prisma/client"
@Injectable()
export class UserService {
  /**
   *
   */
  constructor(private readonly prismaService:PrismaService) {

    
  }
  async create(createUserDto: CreateUserDto):Promise<User> {
    return await this.prismaService.user.create({
      data:createUserDto
    })
  }

 async findAll():Promise<User[]> {
    return await this.prismaService.user.findMany();
 }
  async findOne(id: string):Promise<User>  {
    return await this.prismaService.user.findUniqueOrThrow({
      where:{
        id:id
      }
    })
  }
  async findByPhoneNumber(phoneNumber: number):Promise<User>  {
    return await this.prismaService.user.findFirstOrThrow({
      where:{
        phoneNumber:phoneNumber
      }
    })
  }

  async update(id: string, updateUserDto: UpdateUserDto):Promise<User>  {
    return await this.prismaService.user.update({
      where:{
      id:id
    },data:updateUserDto
    })
  }

  async remove(id: string):Promise<User>  {
    return await this.prismaService.user.delete(
      {
        where:{
          id:id
        }
      }
    )
  }
}
