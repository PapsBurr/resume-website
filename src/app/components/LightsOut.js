"use client";
import React, { useState, useEffect } from 'react'
import './LightsOut.css';

const GRID_SIZE = 3;

function createBoard() {
  return Array.from({ length: GRID_SIZE }, () =>
    Array.from({ length: GRID_SIZE }, () => Math.random() < 0.5)
  );
}

function toggleCell(board, row, col) {
  const newBoard = board.map((r) => r.slice());
  newBoard[row][col] = !newBoard[row][col];
  if (row > 0) newBoard[row - 1][col] = !newBoard[row - 1][col];
  if (row < GRID_SIZE - 1) newBoard[row + 1][col] = !newBoard[row + 1][col];
  if (col > 0) newBoard[row][col - 1] = !newBoard[row][col - 1];
  if (col < GRID_SIZE - 1) newBoard[row][col + 1] = !newBoard[row][col + 1];
  
  return newBoard;
}

const LightsOut = () => {
  const [board, setBoard] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setBoard(createBoard());
  }, []);

  if (!board) {
    return (
      <div className="flex justify-center items-center h-40">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
        <span className="ml-4 text-gray-600">Loading...</span>
      </div>
    )
  };

  const isWin = board.every(row => row.every(cell => !cell));

  const handleCellClick = (row, col) => {
    setBoard(prevBoard => toggleCell(prevBoard, row, col));
  }

  const handleReset = () => {
    setBoard(createBoard());
  }

  return (
    <div className="flex flex-col items-center mt-8">
      <button
        onClick={() => setShow(s => !s)}
        className="mt-6 px-6 py-2 bg-gray-300 hover:bg-gray-400 rounded shadow font-semibold transition-colors duration-200"
      >
        {show ? 'Hide Game' : 'Show Game'}
      </button>
      {show && (
        <>
          <h3 className="text-xl font-semibold mb-4">Recreation of the app</h3>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {board.map((rowArr, rowIdx) => (
              <div key={rowIdx} style={{ display: 'flex' }}>
                {rowArr.map((on, colIdx) => (
                  <button
                    key={colIdx}
                    onClick={() => handleCellClick(rowIdx, colIdx)}
                    className={`w-10 h-10 m-1 rounded border border-gray-500 transition-colors duration-100
                      ${on ? 'bg-[var(--square-color-on)]' : 'bg-[var(--square-color-off)]'}`}
                    aria-label={`Toggle light at row ${rowIdx + 1}, column ${colIdx + 1}`}
                  />
                ))}
              </div>
            ))}
          </div>
          <div>
            <button onClick={handleReset} 
              className="mt-6 px-6 py-2 bg-gray-300 hover:bg-gray-400 rounded shadow font-semibold transition-colors duration-200">
              New Game
            </button>
          </div>
          {isWin && <h3 className="mt-4 text-[var(--square-color-on)] text-lg font-bold">Congratulations! You won!</h3>}
        </>
      )}
    </div>
  );
};

export default LightsOut;