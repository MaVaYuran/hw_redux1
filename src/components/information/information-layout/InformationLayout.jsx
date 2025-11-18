import styles from './InformationLayout.module.css';

const InformationLayout = ({ status }) => {
	return <div className={styles.info}>{status}</div>;
};

export default InformationLayout;
