import { ConfigModule } from "@nestjs/config";
import { HealthModule } from "./health/health.module";
import { LoggerModule } from "nestjs-pino";
import { Module } from "@nestjs/common";
import { ServeStaticModule } from "@nestjs/serve-static";
import { UsersModule } from "./coordinate-generator/coordinate-generator.module";
import { join } from "path";
import { loggerConfig } from "./config/logger.config";

@Module({
  imports: [
    ConfigModule.forRoot(),
    LoggerModule.forRoot(loggerConfig()),
    HealthModule,
    UsersModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "dist/documentation"),
    }),
  ],
})
export class AppModule {}
