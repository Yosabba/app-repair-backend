import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TechsController } from './techs/techs.controller';

@Module({
  controllers: [AppController, TechsController],
  providers: [AppService],
})
export class AppModule {}
