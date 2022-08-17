import './App.css';
import Images from './Images.js';
import {useState} from "react";
import {shuffle} from 'loadsh';

function App() {
  const [cards,setCards] = useState( shuffle([...Images, ...Images]) );

  return (
    <div>
      <div className="board">
        {cards.map(({card,index : number})=> (
            <div className="card-outer">
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
