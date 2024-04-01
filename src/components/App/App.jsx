import { useState } from 'react';
import styles from './app.module.css';

const sendFormData = formData => {
	console.log(formData);
};

export const App = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [repPass, setRepPass] = useState('');
	const [error, setError] = useState(null);

	const handleSubmit = event => {
		event.preventDefault();
		sendFormData({ email, password, repPass });

		let newError = null;

		if (repPass === password) {
			newError = 'Все Ок!';
		} else {
			newError = 'Пароли не совпадают!';
		}

		setError(newError);

		console.log(error);
	};

	const handlePasswordInput = ({ target }) => {
		setPassword(target.value);

		let newError = null;

		if (target.value.length > 20) {
			newError = 'Длина пароля должна быть меньше 20 символов';
		} else {
			newError = 'Другие условия!';
		}

		setError(newError);
	};

	const handleRepeatPasswordInput = ({ target }) => {
		setRepPass(target.value);

		// let newError = null;

		// console.log('repPass:', repPass);
		// console.log('password:', password);

		// if (repPass === password) {
		// 	newError = 'Все Ок!';
		// } else {
		// 	newError = 'Пароли не совпадают!';
		// }

		// setError(newError);
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
						onChange={handlePasswordInput}
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
						onChange={handleRepeatPasswordInput}
					/>
				</div>

				<button className={styles.btn} type="submit">
					Зарегистрироваться
				</button>
			</form>
		</div>
	);
};
