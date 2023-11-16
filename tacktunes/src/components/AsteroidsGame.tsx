"use client";
import { useRef, useEffect ,useState} from "react";

export const AsteroidsGame = () => {
    const [gameStartActive,setgameStartActive] = useState(false)
  const ref = useRef<HTMLCanvasElement | null>(null);
  const startGame = (event:any) => {
    console.log("Game started")
    document.body.style.overflow = 'hidden'
    setgameStartActive(!gameStartActive)
  }
  const eventChecker = (event:any) => {
    switch(event.keyCode){
        case 40:{
            console.log('down')
        break
        }
        case 38:{
            console.log('up')
        break
        }
        case 37:{
            console.log('left')
        break
        }
        case 39:{
            console.log('right')
        break
        }
    }
  }
  useEffect(() => {
    document.addEventListener('keydown', eventChecker);
    let canvas = ref.current;
    let context = canvas?.getContext("2d");
    if(context){
    context.fillRect(10,20,20,20)
    context.fillStyle='red'
}
  });
  return (
    <section className="container pt-28 text-2xl">
      <h3 className="  text-center">Asteroids Game</h3>
      <div>
        <canvas
          ref={ref}
          className="border-2 border-solid  border-lime-900  ml-auto mr-auto mt-1    w-3/4   h-96"
        ></canvas>
      </div>
      <button type="button" onClick={startGame}>{gameStartActive ? "Play" : 'cancle'}</button>
    </section>
  );
};
