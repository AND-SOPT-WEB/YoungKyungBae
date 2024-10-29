import React, { useState } from 'react'
import './App.css'
import Header from './components/Header';
// import Game from './components/Game';
// import Ranking from './components/Ranking';


const App = () => {
  const [view, setView] = useState('game');

  return (
    <>
      <Header setView={setView} view={view} />
      {/* {view === 'game' && <Game />}
      {view === 'ranking' && <Ranking />} */}
    </>
  )
}

export default App
