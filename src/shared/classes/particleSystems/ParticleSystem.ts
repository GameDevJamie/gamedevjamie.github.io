import { Vector } from 'utils/math';

export default interface ParticleSystem {
  update(ctx: CanvasRenderingContext2D, deltaTime: number): void;
  draw(ctx: CanvasRenderingContext2D): void;
  onResize(ctx: CanvasRenderingContext2D): void;
}

export type Particle = {
  pos: Vector;
  velocity: Vector;
  direction: Vector;
  radius: number;
  speed: number;
};
