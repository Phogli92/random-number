import "./App.css";
import Again from "./Components/button";
import Check from "./Components/Check";
import Boss from "./Components/Boss";
import { useState } from "react";
let guess = 0
let number = Math.trunc(Math.random() * 20)+1
console.log(number)
let text = '?'
function App() {
  const [Winner, UseWinner] = useState('?')
  let btnch = () => {
    if(number == guess){
    UseWinner('You Win')
  
    }
    else if(number < guess){
      console.log('Big number');
    }
    else if(number > guess){
      console.log('Small number')
    }
  }  
  return (
    <>
      <header>
        <h1>Guess My Number!</h1>
        <p class="between">(Between 1 and 20)</p>
        <Again again={againBtn} />
        <div class="number">{Winner}</div>
      </header>
      <main>
        <section class="left">
          <input
            type="number"
            class="guess"
            onChange={(e) => (guess = e.target.value)}
          />
          <Check btnch={btnch} guess={guess} number={number}/>
        </section>
        <section class="right">
          <p class="message">Start guessing...</p>
          <p class="label-score">
            💯 Score: <span class="score">20</span>
          </p>
          <p class="label-highscore">
            🥇 Highscore: <span class="highscore">0</span>
          </p>
        </section>
      </main>
      <Boss />
    </>
  );
}

let againBtn = () => {
  location.reload();
};


export default App;
