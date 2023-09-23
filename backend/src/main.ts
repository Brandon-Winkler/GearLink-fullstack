import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';
import { config } from 'dotenv';

async function bootstrap() {
  // load env variables
  config();
  
  const app = await NestFactory.create(AppModule);
  app.use(session({
      secret: process.env.SECRET_SESSION_KEY,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 60000,
      },
    }),
  );
  await app.listen(3000);
}
bootstrap();
