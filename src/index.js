import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './Components/LoginPage/Form';
import './index.css'
import MainPage from './Components/MainPage/MainPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Router>
		<Routes>
			<Route path="/" element={<Form />} />
			<Route path="/mainpage" element={<MainPage />} />
		</Routes>
	</Router>
);

