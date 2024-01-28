import React, { useEffect, useState } from 'react';
import "./App.css";
import BoardComponent from './components/BoardComponent';
import { Board } from './models/Board';

const App = () => {

  // sozdaem sostoyanie pod nazv-em board, function kotoraya izmenyaetet sostoyanie- setboard:
  const [board, setBoard] = useState(new Board())

//sozdaem hook chtoby pri inicializacii etogo componenta my srazy vyzyvaly return
useEffect( () => {
  restart()
}, [])

// nachinaem novuyu partiyu igry
  function restart(){
    const newBoard = new Board();
    newBoard.initCells()
    newBoard.addFigures()
    setBoard(newBoard)
  }

  return (
    <div className = "app">
      <BoardComponent
        board={board}
        setBoard={setBoard}
      />
    </div>
  );
};

export default App;
