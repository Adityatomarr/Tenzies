import React ,{useState} from 'react'
import {nanoid} from "nanoid"

import './App.css'
import Dice from './components/Dice.jsx';

function App() {
    
    const [diceFace, setDiceFace] = useState(allNewDice())
    
    function allNewDice(){
        const dieArray = [];
        for(let i = 0 ; i<10;i++){
            dieArray.push({
                value : Math.floor(Math.random()*6 + 1),
                isHeld : false,
                id: nanoid()
            })
        }
        return dieArray;
    }

    function rollDice(){
        setDiceFace(allNewDice)
    }

    return(
        <main>
            <div className='main-text'>
                <h1>Tenzies</h1>
                <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>

            </div>
            <div className='dice_container'>
            {diceFace.map((num) => <Dice value={num.value} isHeld={num.isHeld} key={num.id}/>)}
            </div>
            <button onClick={rollDice}>Roll</button>

        </main>
    )
}

export default App
