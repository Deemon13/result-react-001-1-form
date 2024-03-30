import { useState } from 'react';
import styles from './app.module.css';

const sendFormData = formData => {
	console.log(formData);
};

export const App = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [repPass, setRepPass] = useState('');

	const handleSubmit = event => {
		event.preventDefault();
		sendFormData({ email, password, repPass });
	};

	return (
		<div className={styles.app}>
			<form className={styles.form} onSubmit={handleSubmit}>
				<div className={styles.group}>
					<label className={styles.label} htmlFor="email">
						Email:
					</label>
					<input
						className={styles.input}
						type="email"
						name="email"
						id="email"
						value={email}
						onChange={({ target }) => setEmail(target.value)}
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
						value={password}
						onChange={({ target }) => setPassword(target.value)}
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
						value={repPass}
						onChange={({ target }) => setRepPass(target.value)}
					/>
				</div>

				<button className={styles.btn} type="submit">
					Зарегистрироваться
				</button>
			</form>
		</div>
	);
};
