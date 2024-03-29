import styles from './app.module.css';

export const App = () => {
	return (
		<div className={styles.app}>
			<form>
				<label>Email:</label>
				<input type="email" />
				<label>Пароль:</label>
				<input type="password" />
				<label>Повтор пароля:</label>
				<input type="password" />
				<button type="submit">Зарегистрироваться</button>
			</form>
		</div>
	);
};
