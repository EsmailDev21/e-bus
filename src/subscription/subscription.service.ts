import { Injectable } from '@nestjs/common';
import { Prisma, Subscription } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';

@Injectable()
export class SubscriptionService {
  /**
   *
   */
  constructor(private readonly prismaService:PrismaService) {
    //super();
    
  }
  async create(createSubscriptionDto: Prisma.SubscriptionCreateInput) {
    return await this.prismaService.subscription.create({data:createSubscriptionDto})
  }

 async findAll() {
    return await this.prismaService.subscription.findMany();
  }

  async findOne(id: string) {
    return await this.prismaService.subscription.findUniqueOrThrow({where:{id:id}})
  }

 async update(id: string, updateSubscriptionDto: Partial<Subscription>) {
    return await this.prismaService.subscription.update({where:{id:id},data:updateSubscriptionDto})
  }

 async remove(id: string) {
    return await this.prismaService.subscription.delete({where:{id:id}})
  }
}
