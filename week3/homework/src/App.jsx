import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header';
import Game from './components/Game';
import Ranking from './components/Ranking';


const App = () => {
  const [view, setView] = useState('game');
  const [nextNumber, setNextNumber] = useState(1);
  const [currentSet, setCurrentSet] = useState(Array.from({ length: 9 }, (_, i) => i + 1));
  const [timer, setTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [level, setLevel] = useState('level1');

  const resetGame = (currentLevel) => {
    setIsTimerRunning(false);
    setTimer(0);
    // setCurrentSet([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    setNextNumber(1);
    switch (currentLevel) {
      case 'level1':
        setCurrentSet(Array.from({ length: 9 }, (_, i) => i + 1));
        console.log(currentSet);
        break;
      case 'level2':
        setCurrentSet(Array.from({ length: 16 }, (_, i) => i + 1));
        console.log(currentSet);
        break;
      case 'level3':
        setCurrentSet(Array.from({ length: 25 }, (_, i) => i + 1));
        console.log(currentSet);
        break;
      default:
        break;
    }
  };


  // resetGame을 할 때 변경된 level을 반영하기 위함
  useEffect(() => {
    resetGame(level);
  }, [level]);

  // useEffect(() => {
  //   console.log("Updated currentSet:", currentSet);
  // }, [currentSet]);

  return (
    <>
      <Header setView={setView} view={view} timer={timer} resetGame={resetGame} setLevel={setLevel} />
      {view === 'game' && ( 
        <Game 
          nextNumber={nextNumber} setNextNumber={setNextNumber}
          currentSet={currentSet} setCurrentSet={setCurrentSet}
          timer={timer} setTimer={setTimer} 
          isTimerRunning={isTimerRunning} setIsTimerRunning={setIsTimerRunning} 
          resetGame={resetGame} level={level}
        /> 
      )}
      {view === 'ranking' && <Ranking />}
    </>
  )
}

export default App
