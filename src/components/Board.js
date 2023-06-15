import React from "react";
import Square from "./Square";

export default function Board({ squares, handleClick }) {
  const rows = [];
  for(let i=0; i<squares.length; i+=3){
    const a = i;
    const b = i + 1;
    const c = i + 2;
    rows.push( (
      <div key={i} className="board-row">
    <Square value={squares[a]} handleClick={() => handleClick(a)} />
    <Square value={squares[b]} handleClick={() => handleClick(b)} />
    <Square value={squares[c]} handleClick={() => handleClick(c)} />
  </div>
    ));
  }
  return (
    <div className="board">
      <div>
        {rows}
      </div>
    </div>
  );
}