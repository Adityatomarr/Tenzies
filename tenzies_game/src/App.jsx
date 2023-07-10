import React from 'react'

import './App.css'
import Dice from './components/Dice.jsx';

function App() {

    function allNewDice(){
        const dieArray = [];
        for(let i = 0 ; i<10;i++){
            dieArray.push(Math.floor(Math.random()*6 + 1))
        }
        return dieArray;
    }
    
  
    return(
        <main>
            <div className='main-text'>
                <h1>Tenzies</h1>
                <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>

            </div>
            <div className='dice_container'>
            {allNewDice().map((num) => <Dice value={num}/>)}
                
              

            </div>
            <button>Roll</button>

        </main>
    )
}

export default App
