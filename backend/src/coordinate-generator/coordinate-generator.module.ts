import { ConfigModule } from "@nestjs/config";
import { Module } from "@nestjs/common";
import { UsersController } from "./coordinate-generator.controller";
import { UsersService } from "./coordinate-generator.service";

@Module({
  imports: [ConfigModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
