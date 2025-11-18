import { useEffect, useState } from 'react';
import { store } from '../../store';
import styles from './FieldLayout.module.css';

const FieldLayout = ({ onCellClick }) => {
	const [field, setField] = useState(store.getState().field);

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setField(store.getState().field);
		});
		return unsubscribe;
	}, []);
	return (
		<div className={styles.cells}>
			{field &&
				field.map((cell, index) => (
					<button
						className={`${styles.cell} ${cell === '0' ? styles.cell0 : ''}`}
						key={index}
						onClick={() => onCellClick(index)}
					>
						{cell}
					</button>
				))}
		</div>
	);
};

export default FieldLayout;
