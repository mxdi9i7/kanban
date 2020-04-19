import React, { useState } from 'react';

import './App.scss';
import Column from './components/Column';
import columnsData from './contants';

function App() {
	const [columns, setColumns] = useState(columnsData);
	const handleAddCard = (input, index) => {
		let newColumns = [...columns];
		newColumns[index].cards.push({ title: input });
		setColumns(newColumns);
	};
	const handleMoveCard = (currentColumn, nextColumn, cardIndex) => {
		console.log(currentColumn, nextColumn, cardIndex);
		const newColumns = [...columns];
		const cardToRemove = newColumns[currentColumn].cards.splice(
			cardIndex,
			1,
		)[0];
		newColumns[nextColumn].cards.push(cardToRemove);
		setColumns(newColumns);
	};

	console.log(columns);
	return (
		<div className='App'>
			<div className='columns-container'>
				{columns.map((column, i) => (
					<Column
						moveCard={handleMoveCard}
						addCardToColumn={handleAddCard}
						index={i}
						titleColor={column.color}
						title={column.title}
						cards={column.cards}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
