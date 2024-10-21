import React from 'react'
import { useLocation } from 'react-router-dom';
import NavBar from './MainPageComponents/NavBar.jsx'
import SideBar from './MainPageComponents/SideBarComponents/SideBar.jsx'

const MainPage = () => {
	const location = useLocation();
  const { username, access_level } = location.state || {}; // Отримуємо дані

	return (
		<>
			<NavBar username={username} />
			<SideBar  accessLevel={access_level} />
		</>
	)
}
const style = {
	body: {
		overflow: 'hidden', // Прибирає скрол для всієї сторінки
	},
	html: {
		overflow: 'hidden', // Прибирає скрол для всієї сторінки
		height: '100%', // Встановлює висоту
	},
};

// Примените стиль
document.body.style.overflow = style.body.overflow;
document.documentElement.style.overflow = style.html.overflow;
document.documentElement.style.height = style.html.height;

export default MainPage