import React from "react";
import "./dice.css";

export default  function Dice(props){
    const styles={
        backgroundColor : props.isHeld && "#59E391"
    }
 
    return(
        <div className="die" style={styles} onClick={()=>props.toggleClick(props.id)}>
            {props.value}
        </div>
    )
}