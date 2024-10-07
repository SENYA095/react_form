import React, { Component, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Form = () => {
	const [email, setEmail] = useState ('')
	const [password, setPassword] = useState('')
	const [emailDirty, setEmailDirty] = useState(false)
	const [passwordDirty, setPasswordDirty] = useState(false)
	const [emailError, setEmailError] = useState('Рядок не може бути пустим')
	const [passwordError, setPasswordError] = useState('Рядок не може бути пустим')
	const [formValid, setFormValid] = useState (false)

	useEffect (() => {
		 if (emailError || passwordError){
				setFormValid(false)
		 }else{
			setFormValid(true)
		 }
	}, [emailError, passwordError])

	const emailHandler  = (e) => {
		setEmail(e.target.value)
		const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
		const value = e.target.value;
		// Використання регулярного виразу для фільтрації неанглійських символів
		const filteredValue = value.replace(/[^A-Za-z0-9._%+-@]/g, '');
		setEmail(filteredValue);
	 	re.test(String(email).toLowerCase())
		if(!re.test(String(e.target.value).toLowerCase())){
			setEmailError('Некоректне заповнення')
		}else{
			setEmailError('')
		}
	}

	const passwordHandler = (e) => {
		setPassword(e.target.value);
		const passwordLength = e.target.value.length;
	
		if (passwordLength < 3 || passwordLength > 8) {
			if (!passwordLength) {
				setPasswordError('Рядок не може бути пустим');
			} else {
				setPasswordError('Пароль має бути довшим за 3 та коротшим за 8 символів');
			}
		} else {
			setPasswordError('');
		}
	};
	
	

	const blurHandler = (e) => {
		switch (e.target.name){
			case 'email':
				setEmailDirty (true)
				break
			case 'password':
				setPasswordDirty (true)	
				break
		}
	}

	const navigate = useNavigate();
		// Обробка натискання на кнопку
		const submitHandler = (e) => {
			e.preventDefault(); // Зупиняє перезавантаження сторінки
	
			// Якщо немає помилок у полях email і password, перенаправляємо на нову сторінку
			if (!emailError && !passwordError && email && password) {
				// Використовуємо navigate для перенаправлення
				navigate('/newpage'); // заміни '/newpage' на потрібний шлях
			} else {
				alert('Перевірте введені дані');
			}
		};

		return (
			<div className='container'>
				<form onSubmit={submitHandler}>
					<h1>Login</h1>
					{(emailDirty && emailError) && <div style={{color: 'red'}}>{emailError}</div>}
					<input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} name='email' type="text" placeholder='Enter your email...' />
					{(passwordDirty && passwordError) && <div style={{color: 'red'}}>{passwordError}</div>}
					<input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} name='password' type="password" placeholder='Enter your password...' />
					<button disabled = {!formValid} type='submit'>Login</button>
				</form>
			</div>
		)
	}
	export default Form

