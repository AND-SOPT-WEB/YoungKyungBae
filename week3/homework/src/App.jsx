import React, { useState } from 'react'
import './App.css'
import Header from './components/Header';
import Game from './components/Game';
import Ranking from './components/Ranking';


const App = () => {
  const [view, setView] = useState('game');
  const [nextNumber, setNextNumber] = useState(1);
  const [currentSet, setCurrentSet] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [timer, setTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const resetGame = () => {
    setIsTimerRunning(false);
    setTimer(0);
    setCurrentSet([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    setNextNumber(1);
  };

  return (
    <>
      <Header setView={setView} view={view} timer={timer} resetGame={resetGame} />
      {view === 'game' && ( 
        <Game 
          nextNumber={nextNumber} setNextNumber={setNextNumber}
          currentSet={currentSet} setCurrentSet={setCurrentSet}
          timer={timer} setTimer={setTimer} 
          isTimerRunning={isTimerRunning} setIsTimerRunning={setIsTimerRunning} 
          resetGame={resetGame}
        /> 
      )}
      {view === 'ranking' && <Ranking />}
    </>
  )
}

export default App
