export interface Coordinate {
  x: number;
  y: number;
}

export function inCircle(x: number, y: number): boolean {
  const radius = 1; // Assuming unit radius for calculation.
  return Math.sqrt(x * x + y * y) < radius;
}

export function calculate(
  total: number,
  coordinates: Coordinate[] | any
): number {
  let count = 0;
  coordinates.forEach((c: Coordinate) => {
    if (inCircle(c.x, c.y)) {
      count++;
    }
  });
  return (4 * count) / total;
}
