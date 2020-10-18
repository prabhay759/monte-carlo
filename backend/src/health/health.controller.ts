import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Controller, Get } from "@nestjs/common";
import { HealthCheckResult } from "@nestjs/terminus";

export const livenessEndpoint = "liveness";

@ApiTags("Health")
@Controller()
export class HealthController {
  @Get(livenessEndpoint)
  @ApiOperation({ summary: "Liveness check for service" })
  @ApiResponse({
    status: 200,
    description: "OK",
    schema: {
      type: "object",
      example: {
        status: "ok",
        details: {},
      },
      properties: {
        status: {
          enum: ["ok"],
          type: "string",
        },
        details: {
          type: "object",
        },
      },
    },
  })
  liveness(): HealthCheckResult {
    return { status: "ok", details: {} };
  }
}
