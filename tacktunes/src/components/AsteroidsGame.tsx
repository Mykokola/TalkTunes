"use client";
import { useRef, useEffect, useState } from "react";

export const AsteroidsGame = () => {
  const [gameStartActive, setgameStartActive] = useState(false);
  const [xVector, setXvector] = useState(0);
  const [howOffen, sethowOffen] = useState<any>(null);
  const [yVector, setYvector] = useState(0);
  const [gavitationInterval, setGavitationInterval] =
    useState<NodeJS.Timeout | null>(null);
  const [spawnInterval, setSpawnInterval] = useState<NodeJS.Timeout | null>(
    null
  );
  const [intervalUpdater, setIntervalUpdater] = useState();
  const [foeGenerator, setFoeGenerator] = useState(1);
  const [foeSpeed, setFoeSpeed] = useState(1);
  const [gravitation, setGravitation] = useState(true);
  const ref = useRef<HTMLCanvasElement | null>(null);
  const [foeArry, setFoeArry] = useState([[1, 0, 30, 30]]);
  const [updateFoe, setUpdateFoe] = useState(false);
  const startGame =  (event: any) => {
    console.log("Game started");
    document.body.style.overflow = gameStartActive ? "auto" : "hidden";
    setgameStartActive(!gameStartActive);
    if (!gameStartActive) {
      document.addEventListener("keydown", eventChecker);
    } 
  };
  const resetGame = () => {
    if (spawnInterval && gavitationInterval) {
      clearInterval(spawnInterval);
      clearInterval(gavitationInterval);
    }
    console.log("triger");
    document.removeEventListener("keydown", eventChecker);

  };
  const eventChecker = (event: any) => {
    const canvas: any = ref.current;
    switch (event.keyCode) {
      case 40: {
        setYvector((e) => {
          if (canvas.height - 15 > e) {
            return (e = e + 3);
          }
          return e;
        });
        break;
      }
      case 38: {
        setYvector((e) => {
          if (0 < e) {
            return (e = e - 3);
          }
          return e;
        });
        break;
      }
      case 37: {
        setXvector((e) => {
          if (0 < e) {
            return (e = e - 3);
          }
          return e;
        });
        break;
      }
      case 39: {
        setXvector((e) => {
          if (canvas.width - 15 > e) {
            return (e = e + 3);
          }
          return e;
        });
        break;
      }
      default:
        break;
    }
  };

  const spawnFoePlace: any = () => {
    const result = Math.floor(Math.random() * 300) - 30;

    for (let i = 0; i < foeArry.length; i++) {
      const existingFoe = foeArry[i];
      const distance = Math.abs(result - existingFoe[0]);
      if (result + 30 < existingFoe[0] || result > existingFoe[0] + 30) {
        return result;
      } else {
        return spawnFoePlace();
      }
    }
    return 0;
  };

  useEffect(() => {
    let canvas = ref.current;
    let context = canvas?.getContext("2d");
    if (context && canvas?.height) {
      setXvector(canvas?.width / 2 - 10);
      setYvector(canvas?.height - 20);
      context.fillRect(canvas?.width / 2 - 10, canvas?.height - 20, 15, 15);
      context.fillStyle = "red";
    }
  }, []);

  useEffect(() => {
    let canvas = ref.current;
    let context = canvas?.getContext("2d");
    if (context && canvas && yVector) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      foeArry.forEach((e) => {
        if (
          e[0] <= xVector &&
          e[0] + 30 >= xVector &&
          e[1] <= yVector &&
          e[1] + 30 >= yVector
        ) {
          resetGame()
        }
      });
      context.fillRect(xVector, yVector, 15, 15);
    }
    if (gravitation) {
      let inteval = setInterval(() => {
        setFoeArry((e: any[]) => {
          const result: any[] = [...e];
          for (let i = 0; i < e.length; i++) {
            if (result[i]) {
              result[i][1] = result[i][1] + 1;
            }
          }
          return result.filter((e) => e[1] < 300);
        });

        if (
          foeArry[foeArry.length - 1][1] > 29 &&
          foeArry[foeArry.length - 1][1] < 35
        ) {
          clearInterval(inteval);
          setGravitation(true);
        }
        setGavitationInterval(inteval);
      }, 2010);
      setGravitation(false);
    }

    if (foeArry[foeArry.length - 1][1] === 32 && updateFoe === false) {
      let interval = setTimeout(() => {
        setFoeArry((e) => [...e, [spawnFoePlace(), 0, 30, 30]]);
        setUpdateFoe(false);
      }, 800);
      setSpawnInterval(interval);
      setUpdateFoe(true);
    }
    foeArry.forEach((e) => {
      context?.clearRect(e[0], e[1], e[2], e[3]);
      context?.fillRect(e[0], e[1], e[2], e[3]);
    });
  }, [xVector, yVector, foeArry]);

  return (
    <section className="container pt-28 text-2xl">
      <h3 className="  text-center">Asteroids Game</h3>
      <div>
        <canvas
          ref={ref}
          className="border-2 border-solid  border-lime-900  ml-auto mr-auto mt-1    w-3/4   h-96"
        ></canvas>
      </div>
      <button
        className=" border-2 border-solid bg-green-700  py-2 px-4 ml-auto mr-auto  block mt-10"
        type="button"
        onClick={startGame}
      >
        {gameStartActive ? "cancle" : "Play"}
      </button>
    </section>
  );
};
