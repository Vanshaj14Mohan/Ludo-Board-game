import { useState } from "react";

function LudoBoard(){

    let [moves, setMoves] = useState({blue: 0, yellow: 0, green: 0, red: 0}); //single object for all 4 buttons
    //for blue button
    let updateBlue = ()=>{
        // console.log(`moves.blue = ${moves.blue}`);
        setMoves((prevMoves)=>{
            return {...prevMoves, blue: prevMoves.blue +1};
        });
    };

     //for yellow button
     let updateYellow = ()=>{
        // console.log(`moves.yellow = ${moves.yellow}`);
        setMoves((prevMoves)=>{
            return {...prevMoves, yellow: prevMoves.yellow +1};
        });
    };

     //for green button
     let updateGreen = ()=>{
        // console.log(`moves.green = ${moves.green}`);
        setMoves((prevMoves)=>{
            return {...prevMoves, green: prevMoves.green +1};
        });
    };

     //for red button
     let updateRed = ()=>{
        // console.log(`moves.red = ${moves.red}`);
        setMoves((prevMoves)=>{
            return {...prevMoves, red: prevMoves.red +1};
        });
    };

    return(
        <div>
            <p>Game begins now..</p>
            <div className="board">
                <p>Blue moves = {moves.blue}</p>
                <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
                <p>Yellow moves = {moves.yellow}</p>
                <button style={{backgroundColor:"yellow"}} onClick={updateYellow}>+1</button>
                <p>Green moves = {moves.green}</p>
                <button style={{backgroundColor:"green"}} onClick={updateGreen}>+1</button>
                <p>Red moves = {moves.red}</p>
                <button style={{backgroundColor:"red"}} onClick={updateRed}>+1</button>
            </div>
        </div>
    );
}

export default LudoBoard;