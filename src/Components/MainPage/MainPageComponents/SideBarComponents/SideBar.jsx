import React, { useState } from 'react';
import { Container, Tab, Row, Col, Nav, Collapse, Tabs } from 'react-bootstrap'
import './stylesidebar.css'
import usersData from '../../../../users.json'

const SideBar = ({accessLevel}) => {
	const [open, setOpen] = useState(false);
	const sidebarStyle = {
		marginTop: '56px', // Відступ для фіксованого Navbar
	};


	return (
		<Container fluid style={sidebarStyle}>
			<Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
				<Row>

					<Col sm={3} className="bg-dark text-white vh-100 position-fixed">
						<Nav variant="pills" className="flex-column mt-2">
							<Nav.Item>
								<Nav.Link eventKey="first">
									HTML
								</Nav.Link>
								<Nav.Link eventKey="second">
									CSS
								</Nav.Link>
								<Nav.Link eventKey="third">
									JS
								</Nav.Link>

								{/* Перевірка рівня доступу */}
								{accessLevel === 'admin' && (
                <>
                  <Nav.Link
                    onClick={() => setOpen(!open)}
                    aria-controls="admin-submenu"
                    aria-expanded={open}
                  >
                    Admin
                  </Nav.Link>

                  <Collapse in={open}>
                    <div id="admin-submenu">
                      <Nav.Link eventKey="fourth" className="ms-3">
                        User Management
                      </Nav.Link>
                    </div>
                  </Collapse>
                </>
              )}




							</Nav.Item>
						</Nav>
					</Col>

					<Col sm={9} className=" offset-sm-3 d-flex justify-content-center align-items-center vh-100 ">

						<Tab.Content className='scrollable-content' >
							<Tab.Pane eventKey="first">
								<div className="image-container">
									<img src={require('../../../img/html-logo.png')} alt='html-logo' className="centered-image" />
									<h1 className="centered-heading">HTML Logo</h1>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam architecto maiores optio reprehenderit blanditiis nesciunt officiis. Culpa est architecto pariatur, molestias at suscipit temporibus. Aliquid animi natus quas iure voluptatibus.</p>
								</div>
							</Tab.Pane>
							<Tab.Pane eventKey="second">
								<div className="image-container">
									<img src={require('../../../img/css-logo.png')} alt="css-logo" className="centered-image" />
									<h1 className='centered-heading'>CSS Logo</h1>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam architecto maiores optio reprehenderit blanditiis nesciunt officiis. Culpa est architecto pariatur, molestias at suscipit temporibus. Aliquid animi natus quas iure voluptatibus.</p>
								</div>
							</Tab.Pane>
							<Tab.Pane eventKey="third">
								<div className="image-container">
									<img src={require('../../../img/js-logo.png')} alt="js-logo" className="centered-image" />
									<h1 className="centered-heading">JS Logo</h1>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam architecto maiores optio reprehenderit blanditiis nesciunt officiis. Culpa est architecto pariatur, molestias at suscipit temporibus. Aliquid animi natus quas iure voluptatibus.</p>
								</div>
							</Tab.Pane>

							<Tab.Pane eventKey="fourth">
								<Tabs defaultActiveKey="allUsers" id="user-management-tabs">
									<Tab eventKey="allUsers" title="All Users">
										<div className="user-content">
											{usersData.map((user, index) => (
												<div className='user-detail' key={index}>
													<span><strong>Email:</strong> {user.email} </span>
													<span><strong>Username:</strong> {user.username} </span>
													<span><strong>AcessLevel:</strong> {user.access_level}</span>

												</div>
											))}
										</div>
									</Tab>

									<Tab eventKey="admins" title="Admins">
										<div className="tab-pane-content">
											{usersData
												.filter(user => user.access_level === 'admin') // Фільтрація тільки адміністраторів
												.map((user, index) => (
													<div className='user-detail' key={index}>
														<span><strong>Admin:</strong> {user.username}</span>
													</div>
												))
											}

										</div>
									</Tab>
								</Tabs>

							</Tab.Pane>


						</Tab.Content>

					</Col>
				</Row>
			</Tab.Container>
		</Container>

	)

}
export default SideBar