import * as requestIp from "request-ip";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { Logger } from "nestjs-pino";
import { NestFactory } from "@nestjs/core";
import { PinoLogger } from "nestjs-pino";
import { applyMiddleware } from "./common/middleware/apply";
import { loggerConfig } from "./config/logger.config";

async function bootstrap() {
  const appLogger: PinoLogger = new PinoLogger(loggerConfig());
  const app = await NestFactory.create(AppModule, {
    logger: new Logger(appLogger, { renameContext: "app-init" }),
    cors: true,
  });
  const logger = app.get(Logger);
  app.useLogger(logger);
  app.use(requestIp.mw());
  applyMiddleware(app);

  const options = new DocumentBuilder()
    .setTitle("monte-carlo")
    .setDescription("Monte Carlo")
    .setVersion("1.0")
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup("swagger", app, document);

  await app.listen(process.env.APP_PORT || 4000);
}

bootstrap();
