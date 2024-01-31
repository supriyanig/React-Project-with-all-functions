// import { useState } from "react"

export default function GameBoard({onSelectSquare,board}){
   
// const[gameBoard, setGameBoard]=useState(initialGameBoard);
// function handleSelectState(rowIndex,colIndex){
//     setGameBoard((prevGameBoard)=>{
//         var newGameBoard=[...prevGameBoard.map((innerArray)=>[...innerArray])];
//         newGameBoard[rowIndex][colIndex]=activePlayerSymbol;
//         return newGameBoard;
//     });
//     onSelectSquare();
// }

    return(<ol id="game-board">
        {board.map((row,rowIndex)=><li key={rowIndex}>
            <ol>
            {/* {row.map((playerSymbol,colIndex)=> <button key={colIndex} onClick={()=>handleSelectState(rowIndex,colIndex)}>{playerSymbol}</button>)} */}
               {row.map((playerSymbol,colIndex)=> <button key={colIndex} onClick={()=>onSelectSquare(rowIndex,colIndex)} disabled={playerSymbol!==null}>{playerSymbol}</button>)}
            </ol>
        </li>)}
        </ol>)
}
