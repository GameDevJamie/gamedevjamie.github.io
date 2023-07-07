/*Functions*/
export function lerp(start: number, end: number, t: number): number {
  return start + (end - start) * t;
}

export function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max);
}

export function getRandomFloat(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

export function hexToRgb(hex: string) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

export function getRGB(str: string) {
  var match = str.match(
    /rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/
  );
  return match
    ? {
        r: match[1],
        g: match[2],
        b: match[3],
      }
    : null;
}

/*Classes*/
export class Vector {
  public x: number;
  public y: number;

  constructor(x?: number, y?: number) {
    this.x = x ? x : 0;
    this.y = y ? y : 0;
  }

  public add(v: Vector) {
    this.x += v.x;
    this.y += v.y;
  }
  public subtract(v: Vector) {
    this.x -= v.x;
    this.y -= v.y;
  }
  public length(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  public normalise() {
    let l = this.length();
    this.x = this.x / l;
    this.y = this.y / l;
  }

  public static Distance(v1: Vector, v2: Vector) {
    let v: Vector = new Vector();
    v.x = v1.x - v2.x;
    v.y = v1.y - v2.y;

    return v.length();
  }

  public static Lerp(v1: Vector, v2: Vector, t: number) {
    return new Vector(lerp(v1.x, v2.x, t), lerp(v1.y, v2.y, t));
  }
}
