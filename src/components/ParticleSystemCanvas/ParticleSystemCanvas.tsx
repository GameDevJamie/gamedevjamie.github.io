import React, { useState } from 'react';
import Canvas from 'components/ui/display/Canvas';
import ParticleSystem from 'shared/classes/particleSystems/ParticleSystem';
import { Vector } from 'utils/math';

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

  const onMouseMove = (mouseX: number, mouseY: number) => {
    particleSystem.setMouseCoords(mouseX, mouseY);
  };

  const onResize = (ctx: CanvasRenderingContext2D) => {
    particleSystem.onResize(ctx);
  };

  return (
    <Canvas
      draw={draw}
      onResize={onResize}
      onMouseMove={onMouseMove}
      className={className}
    />
  );
};

export default ParticleSystemCanvas;
