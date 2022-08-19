import './App.css';
import Images from './Images';
import {useState} from "react";
import {shuffle} from 'loadsh';


function App() {
  const [cards,setCards] = useState( shuffle([...Images, ...Images]) );
  const [click, setClick] = useState({initialState : [0]});
  const [activeCards, setActiveCards] = useState({initialState : []});
  const [foundPairs, setFoundPairs] = useState({initialState: []});

  function flipCard(index) {
    if (activeCards.length === 0) {
      setActiveCards({value : [index]});
    }
    if (activeCards.length === 1) {
      const firstIndex = activeCards[0];
      const secondsIndex = index;
      if (cards[firstIndex] === cards[secondsIndex]) {
        setFoundPairs ({value : [...foundPairs, firstIndex, secondsIndex]})
    }
      setActiveCards({value:[...activeCards, index]});
    }
   if (activeCards.length === 2) {
    
    setActiveCards({value : [index]});
   }
  }


  return (
    <div>
      <div className="board">
        {cards.map((card,index : number)=> { 
           const flippedToFront = (activeCards.indexOf(index) !== -1) || foundPairs.indexOf(index) !== -1;
           return ( 
           <div className={"card-outer" + (flippedToFront ? 'flipped' : '')}  onClick={() => flipCard(index)}>
           <div className="card">
             <div className="front">
               <img src={card} alt="" />
             </div>
             <div className="back"></div>
           </div>
          </div>
       );

         })}
       </div>
    </div>
  );
}

export default App;
