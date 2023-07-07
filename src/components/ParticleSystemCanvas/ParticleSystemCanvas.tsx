import React from 'react';
import Canvas from 'components/ui/display/Canvas';
import ParticleSystem from 'shared/classes/particleSystems/ParticleSystem';

type Props = {
  particleSystem: ParticleSystem;
  className?: string;
};

const ParticleSystemCanvas = ({ particleSystem, className }: Props) => {
  const draw = (ctx: CanvasRenderingContext2D, deltaTime: number) => {
    ctx.globalAlpha = 1;
    ctx.fillStyle = 'rgba(245, 245, 245, 1)';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    particleSystem.update(ctx, deltaTime);
    particleSystem.draw(ctx);
  };

  const onResize = (ctx: CanvasRenderingContext2D) => {
    particleSystem.onResize(ctx);
  };

  return <Canvas draw={draw} onResize={onResize} className={className} />;
};

export default ParticleSystemCanvas;
