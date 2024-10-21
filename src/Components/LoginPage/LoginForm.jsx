import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import usersData from '../../users.json';
import './Parallax/parallax.css'

const LoginForm = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [emailDirty, setEmailDirty] = useState(false)
	const [passwordDirty, setPasswordDirty] = useState(false)
	const [emailError, setEmailError] = useState('Рядок не може бути пустим')
	const [passwordError, setPasswordError] = useState('Рядок не може бути пустим')
	const [formValid, setFormValid] = useState(false)
	const [isValidUser, setIsValidUser] = useState(false);

	useEffect(() => {
		if (emailError || passwordError) {
			setFormValid(false)
		} else {
			setFormValid(true)
		}
	}, [emailError, passwordError])



	const emailHandler = (e) => {
		const value = e.target.value;

		// Фільтрація некоректних символів
		const filteredValue = value.replace(/[^A-Za-z0-9._%+-@]/g, '');

		// Оновлення стану з відфільтрованим значенням
		setEmail(filteredValue);
		const atIndex = filteredValue.indexOf('@');
		const usernamePart = filteredValue.substring(0, atIndex);
		const usernameValid = /^[A-Za-z0-9]+$/.test(usernamePart);

		if (!usernameValid) {
			setEmailError('Частина перед @ повинна містити лише літери та цифри');
		} else {
			setEmailError('');
		}

		// Регулярний вираз для перевірки правильності email
		const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		// Перевірка, чи email правильний
		if (!re.test(String(filteredValue).toLowerCase())) {
			setEmailError('Некоректне заповнення');
			return;
		}
	};

	const passwordHandler = (e) => {
		setPassword(e.target.value);
		const passwordLength = e.target.value.length;

		if (passwordLength < 3 || passwordLength > 10) {
			if (!passwordLength) {
				setPasswordError('Рядок не може бути пустим');
			} else {
				setPasswordError('Пароль має бути довшим за 3 та коротшим за 10 символів');
			}
		} else {
			setPasswordError('');
		}
	};



	const blurHandler = (e) => {
		switch (e.target.name) {
			case 'email':
				setEmailDirty(true)
				break
			case 'password':
				setPasswordDirty(true)
				break
		}
	}

	const navigate = useNavigate();

	const submitHandler = (e) => {
		e.preventDefault(); // Зупиняє перезавантаження сторінки

		const user = usersData.find((user) => user.email === email && user.password === password);


		if (user) {
			setIsValidUser(true);
			navigate('/mainpage', { state: { username: user.username, access_level: user.access_level } });
		} else {
			setIsValidUser(false);
			alert('Невірний email або пароль')
		}
	}


	return (
		<div className='wrapper'>
			<form onSubmit={submitHandler} className='login-form'>

				<h1>Login</h1>

				<input
					onChange={e => emailHandler(e)}
					value={email}
					onBlur={e => blurHandler(e)}
					name='email'
					type="text"
					placeholder='Enter your email...'
				/>

				{(emailDirty && emailError) && <div style={{ color: 'red' }}>{emailError}</div>}

				<input
					onChange={e => passwordHandler(e)}
					value={password}
					onBlur={e => blurHandler(e)}
					name='password'
					type="password"
					placeholder='Enter your password...' />

				{(passwordDirty && passwordError) && <div style={{ color: 'red' }}>{passwordError}</div>}

				<button
					disabled={!formValid}
					type='submit'>
					Login
				</button>

			</form>

		</div>
	)
}

export default LoginForm

