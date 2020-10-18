import * as _ from "lodash";
import { Allow } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class Coordinates {
  @Allow()
  @ApiProperty({
    example: "0.923",
  })
  x: number;

  @Allow()
  @ApiProperty({
    example: "0.546",
  })
  y: number;

  static of(data: Coordinates): Coordinates {
    const result = new Coordinates();
    Object.assign(result, data);
    return result;
  }
}

export class ApiRes {
  data: Array<Coordinates>;
}
