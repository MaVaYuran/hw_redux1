import { useEffect, useState } from 'react';
import { store } from '../../store';
import InformationLayout from './information-layout/InformationLayout';

const Information = () => {
	const [state, setState] = useState(store.getState());

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setState(store.getState());
		});
		return unsubscribe;
	}, []);

	const { isDraw, isGameEnded, currentPlayer } = state;

	let gameStatus;

	if (isDraw) {
		gameStatus = 'Ничья';
	} else if (isGameEnded) {
		gameStatus = `Победа: ${currentPlayer}`;
	} else {
		gameStatus = `Ходит: ${currentPlayer} `;
	}

	return (
		<div>
			<InformationLayout status={gameStatus} />
		</div>
	);
};

export default Information;
