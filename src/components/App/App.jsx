import styles from './app.module.css';
import { InputField } from '../../components';

import { useStore } from '../../hooks';

const sendFormData = formData => {
	console.log(formData);
};

// const REG_EMAIL = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
// const REG_PASS =
// 	/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/;

export const App = () => {
	const { getState, updateState, resetState } = useStore();

	const handleSubmit = event => {
		event.preventDefault();
		sendFormData(getState());
		resetState();
	};

	const { email, password, checkPassword } = getState();

	const handleChange = ({ target }) => updateState(target.name, target.value);

	return (
		<div className={styles.app}>
			<form className={styles.form} onSubmit={handleSubmit}>
				<InputField
					label={'Email:'}
					htmlFor={'email'}
					name={'email'}
					value={email}
					id={'email'}
					type={'email'}
					onChange={handleChange}
				/>
				<InputField
					label={'Пароль:'}
					htmlFor={'password'}
					name={'password'}
					value={password}
					id={'password'}
					type={'password'}
					onChange={handleChange}
				/>
				<InputField
					label={'Повтор пароля:'}
					htmlFor={'checkPassword'}
					name={'checkPassword'}
					value={checkPassword}
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
