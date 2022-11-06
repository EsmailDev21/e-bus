import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { LineModule } from './line/line.module';
import { StationModule } from './station/station.module';
import { LocationModule } from './location/location.module';

@Module({
  imports: [UserModule, PrismaModule, AuthModule, LineModule, StationModule, LocationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
