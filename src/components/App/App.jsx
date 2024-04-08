import { useState } from 'react';
import styles from './app.module.css';
import { InputField } from '../../components';

const sendFormData = formData => {
	console.log(formData);
};

// const REG_EMAIL = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
// const REG_PASS =
// 	/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/;

export const App = () => {
	const [data, setData] = useState({
		email: '',
		password: '',
		checkPassword: '',
	});

	const handleSubmit = event => {
		event.preventDefault();
		sendFormData(data);
	};

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
					onChange={({ target }) => setData({ ...data, email: target.value })}
				/>
				<InputField
					label={'Пароль:'}
					htmlFor={'password'}
					name={'password'}
					value={data.password}
					id={'password'}
					type={'password'}
					onChange={({ target }) =>
						setData({ ...data, password: target.value })
					}
				/>
				<InputField
					label={'Повтор пароля:'}
					htmlFor={'checkPassword'}
					name={'checkPassword'}
					value={data.checkPassword}
					id={'checkPassword'}
					type={'password'}
					onChange={({ target }) =>
						setData({ ...data, checkPassword: target.value })
					}
				/>
				<button className={styles.btn} type="submit">
					Зарегистрироваться
				</button>
			</form>
		</div>
	);
};
