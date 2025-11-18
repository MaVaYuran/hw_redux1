import { INITIAL_FIELD } from './data';
import { WIN_PATTERNS } from './data';

export const initialState = {
	currentPlayer: 'X',
	isGameEnded: false,
	isDraw: false,
	field: INITIAL_FIELD,
};

const checkWinner = (field, player) => {
	return WIN_PATTERNS.some((pattern) =>
		pattern.every((index) => field[index] === player),
	);
};

export const appReducer = (state = initialState, action) => {
	const { type } = action;

	switch (type) {
		case 'CLICK_CELL': {
			const { index } = action;
			if (state.isGameEnded || state.field[index] !== '') return state;

			const newField = [...state.field];
			newField[index] = state.currentPlayer;

			if (checkWinner(newField, state.currentPlayer)) {
				return { ...state, field: newField, isGameEnded: true };
			}

			if (newField.every((cell) => cell !== '')) {
				return { ...state, field: newField, isDraw: true, isGameEnded: true };
			}
			console.log(state);
			return {
				...state,
				field: newField,
				currentPlayer: state.currentPlayer === 'X' ? '0' : 'X',
			};
		}
		case 'SET_NEW_GAME': {
			return initialState;
		}

		default:
			return state;
	}
};
