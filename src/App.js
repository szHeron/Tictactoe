import { useState } from 'react';
import './App.css';

function App() {
  const [matriz, setMatriz] = useState(Array(9).fill(''));
  const [turn, setTurn] = useState('X');
  const [winner, setWinner] = useState(null);

  function handleClick(pos){
    if(matriz.lastIndexOf < 1)
      setWinner("Empate");
    

    if(!matriz[pos] && !winner){
      let temp = matriz;
      let column = 0;
      temp[pos] = turn;
      setTurn(turn === 'X'?'O':'X');
      setMatriz(temp);
      
      for(let index = 0; index < matriz.length; index+=3) {
        if(matriz[index] === matriz[index+1] && matriz[index] === matriz[index+2] && matriz[index] !== '')
          setWinner("Vencedor " + matriz[index]);
        if(matriz[column] === matriz[matriz.length-(6 - column)] && matriz[matriz.length - (3 - column)] === matriz[column] && matriz[column] !== '')
          setWinner("Vencedor " + matriz[column]);
        column++;
      }

      if(matriz[0] === matriz[4] && matriz[4] === matriz[8] && matriz[0] !== '')
        setWinner("Vencedor " + matriz[0]);

      if(matriz[2] === matriz[4] && matriz[2] === matriz[6] && matriz[2] !== '')
        setWinner("Vencedor " + matriz[2]);
    }
      
  }

  return (
    <div className="App">
      <h3>
        Tic Tac Toe {winner}
      </h3>
      <div className="game">
        <div style={{borderBottom: '1px solid #fff'}} className="Row">
          <button onClick={()=>handleClick(0)}>
            {matriz[0]}
          </button>
          <button style={{borderRight: '1px solid #fff', borderLeft: '1px solid #fff'}} onClick={()=>handleClick(1)}>
            {matriz[1]}
          </button>
          <button onClick={()=>handleClick(2)}>
            {matriz[2]}
          </button>
        </div>
        <div style={{borderBottom: '1px solid #fff'}} className="Row">
          <button onClick={()=>handleClick(3)}>
            {matriz[3]}
          </button>
          <button style={{borderRight: '1px solid #fff', borderLeft: '1px solid #fff'}} onClick={()=>handleClick(4)}>
            {matriz[4]}
          </button>
          <button onClick={()=>handleClick(5)}>
            {matriz[5]}
          </button>
        </div>
        <div className="Row">
          <button onClick={()=>handleClick(6)}>
            {matriz[6]}
          </button>
          <button style={{borderRight: '1px solid #fff', borderLeft: '1px solid #fff'}} onClick={()=>handleClick(7)}>
            {matriz[7]}
          </button>
          <button onClick={()=>handleClick(8)}>
            {matriz[8]}
          </button>
        </div>
      </div>
      <button className="reset-button" onClick={()=>{setMatriz(Array(9).fill(''));
                                      setWinner(null)}}>
        RESETAR
      </button>
      {
        winner === null?(
          <p className="info">Vez do {turn}</p>
        ):(
          <p className="info">{winner}</p>
        )

      }
    </div>
  );
}

export default App;