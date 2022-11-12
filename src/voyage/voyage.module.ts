import { Module } from '@nestjs/common';
import { VoyageService } from './voyage.service';
import { VoyageController } from './voyage.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [VoyageController],
  providers: [VoyageService,PrismaService]
})
export class VoyageModule {}
