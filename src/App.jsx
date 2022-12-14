import "./App.css";
import Images from "./Images";
import { useState } from "react";
import { shuffle } from "loadsh";

function App() {
  const [cards, setCards] = useState(
    shuffle({ collection: [...Images, ...Images] })
  );
  const [clicks, setClicks] = useState(0);
  const { won, setWon } = useState(false);
  const [activeCards, setActiveCards] = useState([]);
  const [foundPairs, setFoundPairs] = useState([]);

  function flipCard(index) {
    if (won) {
      setCards(shuffle({ collection: [...Images, ...Images] }));
      setFoundPairs({ value: [] });
      setWon({ value: false });
    }

    if (activeCards.length === 0) {
      setActiveCards({ value: [index] });
    }
    if (activeCards.length === 1) {
      const firstIndex = activeCards[0];
      const secondsIndex = index;
      if (cards[firstIndex] === cards[secondsIndex]) {
        if (foundPairs.length + 2 === cards.length) {
          setWon({ value: true });
        }
        setFoundPairs({ value: [...foundPairs, firstIndex, secondsIndex] });
      }
      setActiveCards({ value: [...activeCards, index] });
    }
    if (activeCards.length === 2) {
      setActiveCards({ value: [index] });
    }
    setClicks({ value: clicks + 1 });
  }

  return (
    <div>
      <div className="board">
        {cards.map((card, index) => {
          const flippedToFront =
            activeCards.indexOf(index) !== -1 ||
            foundPairs.indexOf(index) !== -1;
          return (
            <div
              key={index}
              className={"card-outer" + (flippedToFront ? "flipped" : "")}
              onClick={() => flipCard(index)}
            >
              <div className="card">
                <div className="front">
                  <img height={300} width={400} src={card} alt="" />
                </div>
                <div className="back">
                  <img src={Images[index].image} alt="" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {won && (
        <>
          You won the game! Congratulations <br />
        </>
      )}
      <div className="stats">
        Clicks: {clicks} Found pairs:
        {foundPairs.length / 2}
      </div>
    </div>
  );
}

export default App;
