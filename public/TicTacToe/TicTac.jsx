import './TicTac.css';
import Player from './Player.jsx';
import GameBoard from './GameBoard.jsx';
import GameOver from './GameOver.jsx';
import Log from './Logs.jsx';
import { useState } from 'react';
import {WINNING_COMBINATIONS} from './winning-combination.js';

const Players={
    X:'Player 1',
    O:'Player 2'
}
const INITIAL_GAME_BOARD=[
    [null,null,null],
    [null,null,null],
    [null,null,null],

];

//helper function
function derivedActivePlayer(gameTurns){
    let currentPlayer='X';
    if(gameTurns.length>0 && gameTurns[0].player==='X'){
        currentPlayer='O';
    }
    return currentPlayer;
}
function derivedGameBoard(gameTurns){
    let gameBoard=[...INITIAL_GAME_BOARD.map(array=>[...array])];
     
    for(const turn of gameTurns){
        const {square,player}=turn;
        const {row,col}=square;
        gameBoard[row][col]=player;

    }
    return gameBoard;
}

function derivedWinner(gameBoard,players){
    let winner;
    for(const combination of WINNING_COMBINATIONS){
        const firstSquareSymbol=gameBoard[combination[0].row][combination[0].column];
        const secondSquareSymbol=gameBoard[combination[1].row][combination[1].column];
        const thirdSquareSymbol=gameBoard[combination[2].row][combination[2].column];
        if(firstSquareSymbol && firstSquareSymbol===secondSquareSymbol && firstSquareSymbol===thirdSquareSymbol){
            winner=players[firstSquareSymbol];
        }

    }
    return winner;
}

export default function TicTac(){
    // const [activePlayer,setActivePlayer]=useState('X');
    const [gameTurns, setGameTurns]=useState([]);
    const [players, setPlayers]=useState(Players)
    const  activePlayer=derivedActivePlayer(gameTurns);
    const gameBoard=derivedGameBoard(gameTurns);
    const winner=derivedWinner(gameBoard,players);
    const hasDraw=gameTurns.length===9 && !winner;
    function handleSelectSquare(rowIndex,colIndex){
        // setActivePlayer((curActivePlayer)=>curActivePlayer==='X'? 'O':'X');
        setGameTurns((prevTurns)=>{
            const currentPlayer=derivedActivePlayer(prevTurns);
            const updatedTurns=[{square:{row:rowIndex,col:colIndex},player:currentPlayer},...prevTurns];    
            return updatedTurns;
        })
    }
    function handleRestart(){
        setGameTurns([]);
    }
    function handlePlayerNameChange(symbol,newName){
        setPlayers((prevPlayers)=>{
            return{
                ...prevPlayers,[symbol]:newName
            }
        })
    }
    return(<div className="tic-tac-section">
    <header>
    <img src='game-logo.png' alt='TicTac toe'/>
    <h1>React Tic-Tac-Toe</h1>

    </header>
    <div id="game-container">
        <ol id="players" className='highlight-player'>
            <Player initialName={Players.X} symbol="X" isActive={activePlayer==='X'} onChangeName={handlePlayerNameChange}/>
            <Player initialName={Players.O} symbol="O" isActive={activePlayer==='O'} onChangeName={handlePlayerNameChange}/>
            
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart}/>}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}/>
    </div>
    <Log turns={gameTurns}/>
   
    </div>)
}