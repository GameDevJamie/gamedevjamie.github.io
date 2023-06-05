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
