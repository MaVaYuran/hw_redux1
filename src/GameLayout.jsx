import { useState, useEffect } from 'react';
import styles from './App.module.css';
import { store } from './store';

const GameLayout = ({ children, onReset }) => {
	const [isGameEnded, setIsGameEnded] = useState(store.getState().isGameEnded);

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setIsGameEnded(store.getState().isGameEnded);
		});
		return unsubscribe;
	}, []);

	return (
		<div className={styles.wrapper}>
			{children}
			{isGameEnded && (
				<button type="button" className={styles.reset} onClick={onReset}>
					Начать заново
				</button>
			)}
		</div>
	);
};

export default GameLayout;
