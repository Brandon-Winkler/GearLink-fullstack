import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TypeormStore } from 'connect-typeorm';
import * as session from 'express-session';
import * as passport from 'passport';
import { config } from 'dotenv';
import { DataSource } from 'typeorm';
import { SessionEntity } from './sessions/session.entity';

async function bootstrap() {
  // load env variables
  config();
  
  const app = await NestFactory.create(AppModule);
  const sessionRepo = app.get(DataSource).getRepository(SessionEntity);
  app.use(session({
      name: "Gear_Link_Session_id",
      secret: process.env.SECRET_SESSION_KEY,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 60000,
      },
      store: new TypeormStore().connect(sessionRepo),
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());
  await app.listen(3000);
}
bootstrap();
