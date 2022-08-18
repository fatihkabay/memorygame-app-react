import './App.css';
import Images from './Images';
import {useState} from "react";
import {shuffle} from 'loadsh';
import { initial } from 'lodash';

function App() {
  const [cards,setCards] = useState( shuffle([...Images, ...Images]) );
  const [activeCards, setActiveCards] = useState({initialState : []});

  function flipCard(index) {
     setActiveCards({value : [index]})
  }

  return (
    <div>
      <div className="board">
        {cards.map(({card,index : number})=> (
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
