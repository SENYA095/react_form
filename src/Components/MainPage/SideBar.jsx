import React from 'react'
import { Container, Tab, Row, Col, Nav } from 'react-bootstrap'



const SideBar = () => {

	return (
		<Container>
			<Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
				<Row>
					<Col sm = {3}  className="bg-dark text-white vh-100">
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
								</Nav.Item>
						</Nav>
					</Col>

					<Col sm ={9} className="d-flex justify-content-center align-items-center vh-100 ">

						<Tab.Content>
								<Tab.Pane eventKey = "first">
								<div className="image-container">
									<img src={require('../img/html-logo.png')} alt='html-logo'className="centered-image"/>
									<h1 className="centered-heading">HTML Logo</h1> 
								</div>
								</Tab.Pane>
								<Tab.Pane eventKey = "second">
								<div className="image-container">
									<img src={require('../img/css-logo.png')} alt="css-logo" className="centered-image"/>
									<h1>CSS Logo</h1>
								</div>
								</Tab.Pane>
								<Tab.Pane eventKey = "third">
								<div className="image-container">
									<img src={require('../img/js-logo.png')} alt="js-logo" className="centered-image"/>
									<h1 className="centered-heading">JS Logo</h1>
								</div>
								</Tab.Pane>
						</Tab.Content>
						
					</Col>
				</Row>
			</Tab.Container>
		</Container>

	)

}
export default SideBar