import styles from './app.module.css';

export const App = () => {
	return (
		<div className={styles.app}>
			<form className={styles.form}>
				<div className={styles.group}>
					<label className={styles.label} htmlFor="email">
						Email:
					</label>
					<input
						className={styles.input}
						type="email"
						name="email"
						id="email"
					/>
				</div>
				<div className={styles.group}>
					<label className={styles.label} htmlFor="password">
						Пароль:
					</label>
					<input
						className={styles.input}
						type="password"
						name="password"
						id="password"
					/>
				</div>
				<div className={styles.group}>
					<label className={styles.label} htmlFor="password-repeat">
						Повтор пароля:
					</label>
					<input
						className={styles.input}
						type="password"
						name="password-repeat"
						id="password-repeat"
					/>
				</div>

				<button className={styles.btn} type="submit">
					Зарегистрироваться
				</button>
			</form>
		</div>
	);
};
