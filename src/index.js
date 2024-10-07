import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './Form';
import './index.css'
import NewPage from './NewPage'; // Це нова сторінка, на яку буде перенаправлення
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Router>
	<Routes>
		<Route path="/" element={<Form />} />
		<Route path="/newpage" element={<NewPage />} />
	</Routes>
</Router>
);

