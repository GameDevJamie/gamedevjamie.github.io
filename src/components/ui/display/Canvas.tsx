import React from 'react';
import useCanvas from 'shared/hooks/useCanvas';

type Props = {
  draw: (ctx: CanvasRenderingContext2D, deltaTime: number) => void;
  onResize?: (ctx: CanvasRenderingContext2D) => void;
  onMouseMove?: (mouseX: number, mouseY: number) => void;
  width: number;
  height: number;
  className?: string;
};
const Canvas = ({
  draw,
  onResize,
  onMouseMove,
  width,
  height,
  className,
}: Props) => {
  const canvasRef = useCanvas(draw, onResize, onMouseMove);

  return (
    <canvas
      className={className}
      ref={canvasRef}
      width={width}
      height={height}
    />
  );
};

Canvas.defaultProps = {
  width: window.innerWidth,
  height: window.innerHeight,
};

export default Canvas;
