import { useEffect, useRef } from "react";

export default (
  draw: (ctx: CanvasRenderingContext2D, deltaTime: number) => void,
  onResize?: (ctx: CanvasRenderingContext2D) => void
) => {
  const canvasRef: any = useRef(null);

  const resizeReset = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    if (onResize) onResize(context);
  };

  //Add Event Listeners
  useEffect(() => {
    let tid: NodeJS.Timeout;
    let delay = 200;
    const deBouncer = () => {
      clearTimeout(tid);
      tid = setTimeout(function () {
        resizeReset();
      }, delay);
    };

    window.addEventListener("resize", deBouncer);

    return () => {
      window.removeEventListener("resize", deBouncer);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let animationFrameId: number;
    let lastTime = new Date().getTime();
    let longestFrame = 2;

    const render = () => {
      animationFrameId = window.requestAnimationFrame(render);
      let currentTime = new Date().getTime();
      let deltaTime = (currentTime - lastTime) / 1000;
      if (deltaTime > longestFrame) {
        //Tabbed out
        lastTime = currentTime;
        currentTime = new Date().getTime();
        deltaTime = (currentTime - lastTime) / 1000;
      }
      draw(context, deltaTime);
      lastTime = currentTime;
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);

  return canvasRef;
};
