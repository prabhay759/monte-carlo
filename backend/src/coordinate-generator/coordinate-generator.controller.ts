import { ApiBadRequestResponse, ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { BadRequestException, Controller, Get, HttpCode, HttpStatus, Injectable, Param } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ApiRes, Coordinates } from "./api/coordinate-generator.interface";
import { UsersService } from "./coordinate-generator.service";

@Injectable()
@Controller("coordinates/count")
@ApiTags("Coordinates")
export class UsersController {
  constructor(private usersService: UsersService, private config: ConfigService) {}

  @Get(":count")
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: "Get coordinates by count" })
  @ApiOkResponse({
    description: "Ok",
    type: [Coordinates],
  })
  @ApiBadRequestResponse({ description: "Users search failed. An error message will be returned" })
  async get(@Param("count") count: number): Promise<Array<Coordinates>> {
    if (!Number.isInteger(count)) {
      throw new BadRequestException("count should be a positive integer between 0 to 1000");
    }
    if (count <= 0) {
      throw new BadRequestException("count can not be less than or equal 0");
    }
    if (count >= 100000) {
      throw new BadRequestException("please request number between 0 to 100000");
    }

    const resource = await this.usersService.get(count);
    return resource;
  }
}
