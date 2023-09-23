import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    // it whitelist anything that is not defined in dto means that completely get rid of it no extra attributes
    whitelist: true,
    transform: true,
    transformOptions:{
      enableImplicitConversion: true
    }
  }))
  await app.listen(3000);
}
bootstrap();
