import './App.css';
import Images from './Images';
import {useState} from "react";
import {shuffle} from 'loadsh';


function App() {
  const [cards,setCards] = useState( shuffle([...Images, ...Images]) );
  const [activeCards, setActiveCards] = useState({initialState : []});
  const [foundMatches, setFoundMatches] = useState({initialState: []});

  function flipCard(index) {
    if (activeCards.length === 0) {
      setActiveCards({value : [index]});
    }
    if (activeCards.length === 1) {
      setActiveCards({value:[...activeCards, index]});
    }
   if (activeCards.length === 2) {
    const firstIndex = activeCards[0];
    const secondsIndex = activeCards[1];
    
    if (cards[firstIndex] === cards[secondsIndex]) {
      alert('Your found a pair')
    }
    
    setActiveCards({value : [index]});
   }
  }


  return (
    <div>
      <div className="board">
        {cards.map((card,index : number)=> (
            <div className={"card-outer" + ((activeCards.indexOf(index) !== -1) ? 'flipped' : '')}  onClick={() => flipCard(index)}>
          <div className="card">
            <div className="front">
              <img src={card} alt="" />
            </div>
            <div className="back"></div>
          </div>
         </div>
      
        ))}
       </div>
    </div>
  );
}

export default App;
