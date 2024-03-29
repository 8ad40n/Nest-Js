import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [TypeOrmModule.forRootAsync({
            imports: [ConfigModule.forRoot({
              isGlobal: true,
              envFilePath: ".local.env",
              // envFilePath: ".prod.env",
            })],
            useFactory: (configService: ConfigService) => ({
            type: 'postgres',
            host: configService.get('DB_HOST'),
            port: +configService.get<number>('DB_PORT'),
            username: configService.get('DB_USERNAME'),
            password: configService.get('DB_PASSWORD'),
            database: configService.get('DB_DATABASE'),
            entities: [__dirname + "/../**/*.entity{.ts,.js}"],
            logging: true,
            synchronize: configService.get<boolean>('DB_SYNC'),
            }),
            inject: [ConfigService],
            })
          ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
