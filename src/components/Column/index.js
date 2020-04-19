import React from 'react';
import Card from '../Card';

export default function Column({
	index,
	title,
	titleColor,
	addCardToColumn,
	cards,
	moveCard,
}) {
	const handleAddCard = () => {
		const userInput = window.prompt();
		if (userInput) {
			addCardToColumn(userInput, index);
		}
	};
	return (
		<div className='column-container'>
			<div className='header' style={{ backgroundColor: titleColor }}>
				{title}
			</div>
			<div className='list'>
				{cards.map((card, i) => (
					<Card
						handleMoveCard={moveCard}
						index={index}
						key={i}
						title={card.title}
						cardIndex={i}
					/>
				))}
			</div>
			<div className='footer'>
				<button onClick={handleAddCard}>+ Add a card</button>
			</div>
		</div>
	);
}
