import GameLayout from './GameLayout';
import Field from './components/field/Field';
import Information from './components/information/Information';
import { store } from './store';
import styles from './App.module.css';

export const App = () => {
	const handleResetGame = () => {
		store.dispatch({ type: 'SET_NEW_GAME' });
	};
	return (
		<div className={styles.app}>
			<GameLayout onReset={handleResetGame}>
				<Information />
				<Field />
			</GameLayout>
		</div>
	);
};
