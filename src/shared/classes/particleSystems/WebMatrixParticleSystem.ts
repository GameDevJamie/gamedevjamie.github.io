import ParticleSystem, { Particle } from './ParticleSystem';
import { Vector, getRandomFloat, getRandomInt } from 'utils/math';

export default class WebMatrixParticleSystem implements ParticleSystem {
  private particles: Particle[] = [];
  private numParticles: number;
  private minParticleSpeed: number = 30;
  private maxParticleSpeed: number = 100;
  private maxParticleRadius: number = 3;
  private maxOpacity: number = 0.3;

  private width: number = 0;
  private height: number = 0;
  private prevWidth: number = 0;
  private prevHeight: number = 0;
  private test: boolean = true;

  constructor(particles: number = 50) {
    this.numParticles = particles;
  }

  public update(ctx: CanvasRenderingContext2D, deltaTime: number): void {
    this.width = ctx.canvas.width;
    this.height = ctx.canvas.height;

    if (this.test) {
      for (let i = 0; i < this.numParticles; ++i) {
        this.addParticle();
      }
      this.test = false;
    }

    for (let i = 0; i < this.particles.length; ++i) {
      let particle = this.particles[i];
      particle.pos.x += particle.velocity.x * deltaTime;
      particle.pos.y += particle.velocity.y * deltaTime;

      //Collision detection
      if (particle.pos.x <= 0 || particle.pos.x >= this.width) {
        particle.velocity.x = -particle.velocity.x;
        if (particle.pos.x <= 0) particle.pos.x = 0;
        else if (particle.pos.x >= this.width) particle.pos.x = this.width;
      }
      if (particle.pos.y <= 0 || particle.pos.y >= this.height)
        particle.velocity.y = -particle.velocity.y;
      if (particle.pos.y <= 0) particle.pos.y = 0;
      else if (particle.pos.y >= this.height) particle.pos.y = this.height;
    }
  }

  public draw(ctx: CanvasRenderingContext2D): void {
    let linkRadius = 100;

    for (let i = 0; i < this.particles.length; ++i) {
      this.drawParticle(i, ctx);

      //Link points
      for (let j = i + 1; j < this.particles.length; ++j) {
        //Get Distance between both points
        let distance = Vector.Distance(
          this.particles[i].pos,
          this.particles[j].pos
        );
        let opacity = Math.min(1 - distance / linkRadius, this.maxOpacity);

        if (opacity > 0) {
          //Draw line between points
          this.drawLine(
            ctx,
            this.particles[i].pos,
            this.particles[j].pos,
            opacity
          );
        }
      }
    }
  }

  public onResize(ctx: CanvasRenderingContext2D): void {
    this.prevWidth = this.width;
    this.prevHeight = this.height;
    this.width = ctx.canvas.width;
    this.height = ctx.canvas.height;

    for (let i = 0; i < this.particles.length; ++i) {
      //Updates particle position to stay relative to canvas size. (In case of canvas/window resize)
      let pos = this.particles[i].pos;
      let percentage: Vector = new Vector();
      percentage.x = pos.x / this.prevWidth;
      percentage.y = pos.y / this.prevHeight;
      this.particles[i].pos.x = this.width * percentage.x;
      this.particles[i].pos.y = this.height * percentage.y;
    }
  }

  private addParticle() {
    let pos = this.getRandomPoint();

    let p: Particle = {
      pos: new Vector(pos.x, pos.y),
      velocity: new Vector(),
      direction: new Vector(getRandomFloat(-1, 1), getRandomFloat(-1, 1)),
      radius: getRandomInt(this.maxParticleRadius),
      speed: getRandomFloat(this.minParticleSpeed, this.maxParticleSpeed),
    };

    p.direction.normalise();
    p.velocity.x = p.direction.x * p.speed;
    p.velocity.y = p.direction.y * p.speed;

    this.particles.push(p);
  }

  private drawParticle(index: number, ctx: CanvasRenderingContext2D) {
    let p = this.particles[index];
    ctx.fillStyle = `rgba(0, 0, 0, ${this.maxOpacity})`;
    ctx.beginPath();
    ctx.arc(p.pos.x, p.pos.y, p.radius, 0, 2 * Math.PI);
    ctx.fill();
  }

  private drawLine(
    ctx: CanvasRenderingContext2D,
    a: Vector,
    b: Vector,
    opacity: number
  ) {
    ctx.lineWidth = 0.5;
    ctx.strokeStyle = `rgba(0, 0, 0, ${opacity})`;
    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    ctx.closePath();
    ctx.stroke();
  }

  private getRandomPoint(): Vector {
    let x = getRandomInt(this.width);
    let y = getRandomInt(this.height);
    return new Vector(x, y);
  }
}
