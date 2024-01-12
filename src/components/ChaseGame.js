import React, { useRef, useEffect } from "react";

const ChaseGame = () => {
  const gameCanvasRef = useRef();
  const chaseObjectRef = useRef();

  useEffect(() => {
    const chaseObject = chaseObjectRef.current;
    const gameCanvas = gameCanvasRef.current;
    let objectPos = { x: 250, y: 250 };
    let moveDistance = 30;
    let animationFrameId;

    chaseObject.style.left = `${objectPos.x}px`;
    chaseObject.style.top = `${objectPos.y}px`;
    const moveObject = () => {
      animationFrameId = requestAnimationFrame(moveObject);
      // ... existing movement logic ...
    };
    const handleMouseMove = (event) => {
      let rect = gameCanvas.getBoundingClientRect();
      let mouseX = event.clientX - rect.left;
      let mouseY = event.clientY - rect.top;

      let distance = Math.sqrt(
        Math.pow(mouseX - objectPos.x, 2) + Math.pow(mouseY - objectPos.y, 2)
      );

      if (distance < 50) {
        let angle = Math.atan2(objectPos.y - mouseY, objectPos.x - mouseX);
        objectPos.x += moveDistance * Math.cos(angle);
        objectPos.y += moveDistance * Math.sin(angle);

        objectPos.x = Math.min(
          Math.max(30, objectPos.x),
          gameCanvas.clientWidth - chaseObject.clientWidth - 30
        );
        objectPos.y = Math.min(
          Math.max(30, objectPos.y),
          gameCanvas.clientHeight - chaseObject.clientHeight - 30
        );

        chaseObject.style.left = `${objectPos.x}px`;
        chaseObject.style.top = `${objectPos.y}px`;
      }
    };

    gameCanvas.addEventListener("mousemove", handleMouseMove);
    moveObject();
    return () => {
      gameCanvas.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={gameCanvasRef}
      className="w-[700px] h-[600px] border border-gray-800 relative mx-auto mt-12 shadow-slate-800 bg-stone-800 rounded-lg overflow-hidden"
    >
      <div
        ref={chaseObjectRef}
        className="w-9 h-9 bg-red-500 rounded-full absolute"
      ></div>
    </div>
  );
};

export default ChaseGame;
