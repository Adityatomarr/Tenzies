import React ,{useState, useEffect, } from 'react'
import {nanoid} from "nanoid"
import Confetti from 'react-confetti'

import './App.css'
import Dice from './components/Dice.jsx';

function App() {
    
    const [dice, setDice] = useState(allNewDice())
    const [tenzies, setTenzies] = useState(false)
    
    
    
    function generateNewDie() {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid()
        }
    }
    function allNewDice(){
        const dieArray = [];
        for(let i = 0 ; i<10;i++){
            dieArray.push(generateNewDie())
        }
        return dieArray;
    }

    function rollDice(){
        if(!tenzies){    
            setDice(prevState=> prevState.map((object) => {
            return object.isHeld ?
                object :
                generateNewDie()
            }
        ))}
        else{
            setDice(allNewDice())
            setTenzies(false)
        }

    }

    function holdDice(id){
        // console.log(id)
        setDice(prevState => prevState.map(object => {
                return object.id === id ? 
                   {...object,isHeld:!object.isHeld}:
                    object
            }))    
    }

    useEffect(()=>{
        const allHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const allSameValue = dice.every(die => die.value === firstValue)
        if (allHeld && allSameValue) {
            setTenzies(true)
            console.log("You won!")
            
             
        }
    },[dice])
   

    return(
        <main>
            {tenzies && <Confetti/>}
            <div className='main-text'>
                <h1>Tenzies</h1>
                <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>

            </div>
            <div className='dice_container'>
            {dice.map((num) => <Dice value={num.value} isHeld={num.isHeld} key={num.id} toggleClick={holdDice} id={num.id}/>)}
            </div>
            <button onClick={rollDice}>{tenzies ? "New Game" :"Roll"}</button>

        </main>
    )
}

export default App
