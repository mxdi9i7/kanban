import React, { useState } from 'react';

import './App.scss';
import Column from './components/Column';
import cardsData from './contants';

function App() {
	const [cards, setCards] = useState(cardsData);
	const handleAddCard = (input, index) => {
		let newCards = [...cards];
		console.log(newCards);
		newCards[index].cards.push({ title: input });
		console.log(newCards);
		setCards(newCards);
	};
	const handleMoveCard = (currentColumn, nextColumn, cardIndex) => {
		console.log(currentColumn, nextColumn, cardIndex);
		const newCards = [...cards];
		const cardToRemove = cards[currentColumn].cards.splice(cardIndex, 1)[0];
		newCards[nextColumn].cards.push(cardToRemove);
		setCards(newCards);
	};

	return (
		<div className='App'>
			<div className='columns-container'>
				{cards.map((card) => (
					<Column
						moveCard={handleMoveCard}
						addCardToColumn={handleAddCard}
						index={0}
						titleColor={card.color}
						title={card.title}
						cards={card.cards}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
