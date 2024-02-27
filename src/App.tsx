"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "What if I asked really nicely?",
      "Pretty please",
      "With a red red rose",
      "What about an ice cream in this cold weather?",
      "pleaashhh pleaaahh",
      "But :*(",
      "I am going to die",
      "Yep im dead",
      "Ok ur talking to Ashqar's ghost..",
      "Please dear",
      ":((((",
      "PRETTY PLEASE",
      "mei mrgya",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 text-4xl font-bold">WOOOOOO!!! Hold me I'm falling ;))</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 text-4xl">Will you go to prom with me?</h1>
          <div className="flex flex-col items-center">
  <div>
    <button
      className={`mb-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
      style={{ fontSize: yesButtonSize }}
      onClick={() => setYesPressed(true)}
    >
      Yes
    </button>
  </div>
  <div>
    <button
      onClick={handleNoClick}
      className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
    >
      {noCount === 0 ? "No" : getNoButtonText()}
    </button>
  </div>
</div>

        </>
      )}
    </div>
  );
}
