import './app.css'
import { useState } from "react";
import bear from './assets/bear.gif'
import noo from './assets/noo.gif'
import Yess from './assets/Yesss.gif'

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [noPressed, setNoPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
    setNoPressed(true);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "What if I asked really nicely?",
      "Pretty please",
      "With a chocolate rice cake on top",
      "What about a matcha frostie",
      "PLEASE POOKIE",
      "But :*(",
      "I am going to die",
      "Yep im dead",
      "ok ur talking to nathan's ghost",
      "please babe",
      ":((((",
      "PRETTY PLEASE",
      "Estoy muerto",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  const getGif = () => {
    return noPressed ? noo : bear;
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src={Yess} />
          <div className="my-4 text-4xl font-bold">EU TE AMO BÊEEEEEEEEEE!!</div>
          <div className='flex items-center justify-center mt-20'>
            <a
            href="https://www.youtube.com/watch?v=GC5Ecs5iIrc"
          className={`mr-4 rounded bg-purple-700 px-4 py-2 font-bold text-white hover:bg-purple-900`}
          >
          Surpresa 1
          </a>

          <a
          href='https://www.youtube.com/watch?v=DLDA0mYTnms'
          className=" rounded bg-purple-500 px-4 py-2 font-bold text-white hover:bg-purple-700"
          >
          Surpresa 2
          </a>
          </div>

          <p className='absolute top-[740px]'>20:20</p>
              
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src={getGif()}
          />
          <h1 className="my-4 text-4xl">Quer ser a minha Valentine???</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}