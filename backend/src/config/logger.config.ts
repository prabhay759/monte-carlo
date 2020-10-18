import * as pino from "pino";
import { livenessEndpoint } from "../health/health.controller";

import { Params } from "nestjs-pino";

const level = "info";
export const XRequestId = "X-Request-ID";
export const serviceName = "monte-carlo";
export function loggerConfig(): Params {
  return {
    pinoHttp: {
      level: process.env.LOG_LEVEL || level,
      useLevel: level,
      prettyPrint: true,
      autoLogging: {
        ignorePaths: [`/${livenessEndpoint}`],
      },
      formatters: {
        level: (name: string): { level: string } => ({ level: name }),
        bindings: ({ pid }): { pid: number } => ({ pid }),
      },
      timestamp: pino.stdTimeFunctions.isoTime,
      messageKey: "message", // defaults to msg
      reqCustomProps: req => ({
        [XRequestId]: req.headers[XRequestId.toLowerCase()],
        service: serviceName,
      }),
    },
  };
}
