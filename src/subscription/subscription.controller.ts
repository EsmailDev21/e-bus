import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SubscriptionService } from './subscription.service';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';
import { Prisma, Subscription } from '@prisma/client';

@Controller('subscription')
export class SubscriptionController {
  constructor(private readonly subscriptionService: SubscriptionService) {}

  @Post()
  async create(@Body() createSubscriptionDto: Prisma.SubscriptionCreateInput) {
    return await this.subscriptionService.create(createSubscriptionDto);
  }

  @Get()
  async findAll() {
    return await  this.subscriptionService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.subscriptionService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateSubscriptionDto: Partial<Subscription>) {
    return await this.subscriptionService.update(id, updateSubscriptionDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.subscriptionService.remove(id);
  }
}
