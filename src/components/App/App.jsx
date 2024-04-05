import { useState } from 'react';
import styles from './app.module.css';
import { InputField } from '../../components';

const sendFormData = formData => {
	console.log(formData);
};

const REG_EMAIL = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
const REG_PASS =
	/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/;

export const App = () => {
	const [data, setData] = useState({
		email: '',
		password: '',
		checkPassword: '',
	});

	// const [email, setEmail] = useState('');
	// const [password, setPassword] = useState('');
	// const [repPass, setRepPass] = useState('');
	// const [error, setError] = useState(null);

	const handleChange = ({ target }) => {
		const { name, value } = target;

		setData(prevState => ({
			...prevState,
			[name]: value,
		}));

		if (!REG_EMAIL.test(value) && name === 'email') {
			console.log('Invalid email');
		}

		if (!REG_PASS.test(value) && name === 'password') {
			console.log('Invalid password');
		}
		
		if (value !== data.password && name === 'checkPassword') {
			console.log('Passwords not equal');
		}
	};

	const handleSubmit = event => {
		event.preventDefault();
		sendFormData(data);

		// let newError = null;

		// if (repPass === password) {
		// 	newError = 'Все Ок!';
		// } else {
		// 	newError = 'Пароли не совпадают!';
		// }

		// setError(newError);

		// console.log(error);
	};

	// const handlePasswordInput = ({ target }) => {
	// 	setPassword(target.value);

	// 	let newError = null;

	// 	if (target.value.length > 20) {
	// 		newError = 'Длина пароля должна быть меньше 20 символов';
	// 	} else {
	// 		newError = 'Другие условия!';
	// 	}

	// 	setError(newError);

	// 	console.log(error);
	// };

	// const handleRepeatPasswordInput = ({ target }) => {
	// 	setRepPass(target.value);

	// let newError = null;

	// console.log('repPass:', repPass);
	// console.log('password:', password);

	// if (repPass === password) {
	// 	newError = 'Все Ок!';
	// } else {
	// 	newError = 'Пароли не совпадают!';
	// }

	// setError(newError);
	// };

	// const handleRepeatPasswordChangeFocus = () => {
	// 	let newError = null;

	// 	if (repPass === password) {
	// 		newError = 'Все Ок!';
	// 	} else {
	// 		newError = 'Пароли не совпадают!';
	// 	}

	// 	setError(newError);

	// 	console.log(error);
	// };

	return (
		<div className={styles.app}>
			<form className={styles.form} onSubmit={handleSubmit}>
				<InputField
					label={'Email:'}
					htmlFor={'email'}
					name={'email'}
					value={data.email}
					id={'email'}
					type={'email'}
					onChange={handleChange}
				/>
				<InputField
					label={'Пароль:'}
					htmlFor={'password'}
					name={'password'}
					value={data.password}
					id={'password'}
					type={'password'}
					onChange={handleChange}
				/>
				<InputField
					label={'Повтор пароля:'}
					htmlFor={'checkPassword'}
					name={'checkPassword'}
					value={data.checkPassword}
					id={'checkPassword'}
					type={'password'}
					onChange={handleChange}
				/>
				<button className={styles.btn} type="submit">
					Зарегистрироваться
				</button>
			</form>
		</div>
	);
};
