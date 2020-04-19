import React from 'react';

export default function Card({ title, handleMoveCard, index, cardIndex }) {
  return (
    <div className='card'>
      {index !== 0 && (
        <div className='prev'>
          <button onClick={() => handleMoveCard(index, index - 1, cardIndex)}>Prev</button>
        </div>
      )}

      <div className='content'>{title}</div>
      {index !== 3 && (
        <div className='next'>
          <button onClick={() => handleMoveCard(index, index + 1, cardIndex)}>Next</button>
        </div>
      )}
    </div>
  );
}
