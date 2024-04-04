import styles from './inputField.module.css';

export const InputField = ({ label, htmlFor, ...otherProps }) => {
	return (
		<div className={styles.group}>
			<label className={styles.label} htmlFor={htmlFor}>
				{label}
			</label>
			<input className={styles.input} {...otherProps} />
		</div>
	);
};
