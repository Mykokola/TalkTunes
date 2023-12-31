"use client";
type FoeType = [number, number, number, number];
import React, { useRef, useEffect, useState, useCallback, use } from "react";
export const AsteroidsGame = () => {
  const [gameStartActive, setgameStartActive] = useState<boolean>(false);
  const [xVector, setXvector] = useState<number>(0);
  const [retryGame, setRetryGame] = useState<boolean>(false);
  const [yVector, setYvector] = useState<number>(0);
  const [gavitationInterval, setGavitationInterval] =
    useState<NodeJS.Timeout | null>(null);
  const [spawnInterval, setSpawnInterval] = useState<NodeJS.Timeout | null>(
    null
  );
  const [foeGenerator, setFoeGenerator] = useState<number>(20);
  const [foeSpeed, setFoeSpeed] = useState<number>(100);
  const [dificalt, setDificalt] = useState<NodeJS.Timeout | null>(null);
  const [gravitation, setGravitation] = useState(false);
  const ref = useRef<HTMLCanvasElement | null>(null);
  const [foeArry, setFoeArry] = useState<FoeType[]>([[1, 0, 30, 30]]);
  const [updateFoe, setUpdateFoe] = useState<boolean>(false);
  const [level, setLevel] = useState(0);
  const startGame = () => {
    setRetryGame(true);
    setFoeArry([[1, 0, 30, 30]]);
    console.log("Game started");
    document.body.style.overflow = gameStartActive ? "auto" : "hidden";
    gameStartActive ? setGravitation(false) : setGravitation(true);
    spawnInterval && clearInterval(spawnInterval);
    gavitationInterval && clearInterval(gavitationInterval);
    setgameStartActive(!gameStartActive);
    if (!gameStartActive) {
      document.addEventListener("keydown", eventChecker);
    }
    dificalt && clearInterval(dificalt);
    const inteval = setInterval(() => {
      setFoeSpeed((e) => (e = e - 5));
      setFoeGenerator((e) => (e = e - 1));
      setLevel((e) => (e += 1));
    }, 12000);
    setLevel(0);

    setDificalt(inteval);
    setUpdateFoe(false);
  };
  const resetGame = () => {
    setGravitation(false);
    setUpdateFoe(true);
    spawnInterval && clearInterval(spawnInterval);
    gavitationInterval && clearInterval(gavitationInterval);
    dificalt && clearInterval(dificalt);

    document.removeEventListener("keydown", eventChecker);
  };
  const eventChecker = useCallback((event:any) => {
    const canvas: HTMLCanvasElement|null = ref.current;
    switch (event.keyCode) {
      case 40: {
        setYvector((e) => {
          if (canvas&&canvas.height - 15 > e) {
            return (e = e + 7);
          }
          return e;
        });
        break;
      }
      case 38: {
        setYvector((e) => {
          if (0 < e) {
            return (e = e - 7);
          }
          return e;
        });
        break;
      }
      case 37: {
        setXvector((e) => {
          if (0 < e) {
            return (e = e - 7);
          }
          return e;
        });
        break;
      }
      case 39: {
        setXvector((e) => {
          if (canvas&&canvas.width - 15 > e) {
            return (e = e + 7);
          }
          return e;
        });
        break;
      }
      default:
        break;
    }
  }, []);

  const spawnFoePlace = ():number => {
    const result = Math.floor(Math.random() * 300) - 30;
    for (let i = 0; i < foeArry.length; i++) {
      const existingFoe = foeArry[i];
      if (result + 30 < existingFoe[0] || result > existingFoe[0] + 30) {
        return result;
      } else {
        return spawnFoePlace();
      }
    }
    return 0;
  };

  useEffect(() => {
    const canvas = ref.current;
    const context = canvas?.getContext("2d");
    if (context && canvas) {
      setXvector(canvas.width / 2 - 10);
      setYvector(canvas.height - 20);
    }
    setRetryGame(false);
  }, [retryGame]);

  useEffect(() => {
    const canvas = ref.current;
    const context = canvas?.getContext("2d");
    if (context && canvas) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      foeArry.forEach((e) => {
        if (
          e[0] - 10 <= xVector &&
          e[0] + 25 >= xVector &&
          e[1] - 10 <= yVector &&
          e[1] + 25 >= yVector
        ) {
          resetGame();
        }
      });
      const persone:HTMLImageElement = new Image();
      persone.src = "userImg.svg";
      context?.drawImage(persone, xVector, yVector, 15, 15);
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
      }, foeSpeed);
      setGravitation(false);
    }

    if (foeArry[foeArry.length - 1][1] === 32 && updateFoe === false) {
      let interval = setTimeout(() => {
        setFoeArry((e) => [...e, [spawnFoePlace(), 0, 30, 30]]);
        setUpdateFoe(false);
      }, foeGenerator);
      setSpawnInterval(interval);
      setUpdateFoe(true);
    }
    foeArry.forEach((e) => {
     context?.clearRect(e[0], e[1], e[2], e[3]);
      const image:HTMLImageElement = new Image(); //
      image.src = "asteroid.svg";
      context?.drawImage(image, e[0], e[1], 35, 35);
    });
  }, [xVector, yVector, foeArry]);

  return (
    <section id="Game" className="container pt-28 text-2xl">
      <h3 className="  text-center">Asteroids Game</h3>
      <div>
        <h3>Level:{level}</h3>
        <canvas
          ref={ref}
          className="border-2   bg-slate-400 border-solid  border-lime-900  ml-auto mr-auto mt-1    w-3/4   h-96"
        ></canvas>
      </div>
      <button
        className=" border-2 border-solid bg-green-700  py-2 px-4 ml-auto mr-auto  block mt-10"
        type="button"
        onClick={startGame}
      >
        {gameStartActive ? "Retry" : "Play"}
      </button>
    </section>
  );
};
