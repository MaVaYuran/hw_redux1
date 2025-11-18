import FieldLayout from './FieldLayout';
import { store } from '../../store';
import styles from './Field.module.css';

const Field = () => {
	const handleCellClick = (index) => {
		store.dispatch({ type: 'CLICK_CELL', index });
	};

	return (
		<div className={styles.field}>
			<FieldLayout onCellClick={handleCellClick} />
		</div>
	);
};

export default Field;
