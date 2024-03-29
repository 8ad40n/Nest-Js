import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './config/typeorm.config';
import { LoginModule } from './login/login.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), LoginModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
