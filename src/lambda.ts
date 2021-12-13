import { Handler, Context } from 'aws-lambda';
import { Server } from 'http';
import { createServer, proxy } from 'aws-serverless-express';
import { eventContext } from 'aws-serverless-express/middleware';

import { NestFactory } from '@nestjs/core';
import {
  ExpressAdapter,
  NestExpressApplication,
} from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as express from 'express';
import { join } from 'path';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const binaryMimeTypes: string[] = [];

let cachedServer: Server;

process.on('unhandledRejection', (reason) => {
  // tslint:disable-next-line: no-console
  console.error(reason);
});

process.on('uncaughtException', (reason) => {
  // tslint:disable-next-line: no-console
  console.error(reason);
});

async function bootstrapServer(): Promise<Server> {
  if (!cachedServer) {
    const expressApp = express();
    const nestApp = await NestFactory.create<NestExpressApplication>(
      AppModule,
      new ExpressAdapter(expressApp),
    );
    nestApp.use(eventContext());

    const config = new DocumentBuilder()
      .setTitle('Gerenciador de acesso do usuário')
      .setDescription(
        'Esta API cuida do cadastro de usuários e da quantidade de acessos ao sistema.',
      )
      .setVersion('1.0')
      .build();
    const document = SwaggerModule.createDocument(nestApp, config);
    SwaggerModule.setup('api', nestApp, document);

    nestApp.setBaseViewsDir(join(__dirname, '..', 'views'));
    nestApp.useStaticAssets(join(__dirname, '..', 'public'));
    nestApp.setViewEngine('hbs');

    await nestApp.init();
    cachedServer = createServer(expressApp, undefined, binaryMimeTypes);
  }
  return cachedServer;
}

export const handler: Handler = async (event: any, context: Context) => {
  if (event.path === '/api') {
    event.path = '/api/';
  }

  event.path = event.path.includes('swagger-ui')
    ? `/api${event.path}`
    : event.path;

  cachedServer = await bootstrapServer();

  return proxy(cachedServer, event, context, 'PROMISE').promise;
};
