import { Injectable } from "@nestjs/common";
import { Coordinates } from "./api/coordinate-generator.interface";

@Injectable()
export class UsersService {
  constructor() {}
  async get(count: number): Promise<Array<Coordinates>> {
    var coordinates: Array<Coordinates> = [];
    for (let i = 0; i < count; i++) {
      coordinates.push({
        x: Math.random() * (1 - -1) + -1,
        y: Math.random() * (1 - -1) + -1,
      });
    }
    return coordinates;
  }
}
