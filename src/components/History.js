import React from "react";

function History({ history, handleStep }) {
  return (
    <div className="history">
      <h4>History</h4>
      <ul>
        {history.map((item, index) => (
          <li key={index}>
            <button onClick={() => {handleStep(index)}}>{index ? `Step ${index}` : "Game start"}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default History;
