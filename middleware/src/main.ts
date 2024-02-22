import { NestFactory } from '@nestjs/core';
import { NextFunction, Request, Response } from 'express';
import { AppModule } from './app.module';

// global based middleware
function globalMiddlewareOne(req: Request, res: Response, next: NextFunction)
{
  console.log("Middleware one: Global")
  next();
}
function globalMiddlewareTwo(req: Request, res: Response, next: NextFunction)
{
  console.log("Middleware two: Global")
  next();
}


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(globalMiddlewareOne);
  app.use(globalMiddlewareTwo);

  await app.listen(3000);
}
bootstrap();
