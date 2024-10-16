import React from 'react'
import { Nav, Navbar, NavbarBrand, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../img/react.svg'
import { useNavigate, useLocation } from 'react-router-dom';

const NavBar = () => {

	const navigate = useNavigate();
	const location = useLocation();
	const { username } = location.state || { username: 'Guest' };

	const handleLogOut = () => {
		navigate('/');
	};

	return (
		<Navbar bg="dark" variant="dark">
			<NavbarBrand href='#'>
				<img src={logo}
					height='30'
					width='30'
					className='d-inline-block align-top'
					alt='logo' />
			</NavbarBrand>

			<Nav className='me-auto'>
				<Nav.Link href='#'>
					Home
				</Nav.Link>
				<Nav.Link href='#'>
					About
				</Nav.Link>
				<Nav.Link href='#'>
					Contacts
				</Nav.Link>
				<Nav.Link href='#'>
					Blog
				</Nav.Link>
			</Nav>

			<span className="span-color me-3">Username: {username}</span>
			<Button variant="danger" onClick={handleLogOut}>
				Log Out
			</Button>

		</Navbar>
	)

};

export default NavBar;