import { appReducer } from './reducer';

const createStore = (reducer) => {
	let state = reducer(undefined, { type: 'INIT' });
	let listeners = [];
	return {
		dispatch: (action) => {
			state = reducer(state, action);
			listeners.forEach((listener) => listener());
		},
		getState: () => state,
		subscribe: (listener) => {
			listeners.push(listener);
			return () => {
				listeners = listeners.filter((l) => listener !== l);
			};
		},
	};
};
export const store = createStore(appReducer);
