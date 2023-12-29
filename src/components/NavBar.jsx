import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
/* import NavDropdown from "react-bootstrap/NavDropdown"; */
import NavBarImg from "../images/logo.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const NavBar = () => {
    return (
        <>
            {" "}
            <Navbar expand="none" className="bg-sfondo" variant="dark">
                <Container>
                    <div className="d-flex align-items-center justify-content-between w-100 order-last">
                        <Navbar.Brand href="#home">
                            <img className="style-logo-navbar" src={NavBarImg} alt="logo" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    </div>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Row className="text-secondary">
                                <Col xs={12} md={8} xl={6}>
                                    <div>
                                        <h3>About</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur blanditiis
                                            impedit aspernatur amet magni dignissimos distinctio excepturi minus. Est,
                                            tempore!
                                        </p>
                                    </div>
                                </Col>
                                <Col className="d-flex justify-content-start justify-content-xl-center">
                                    <ul>
                                        <h3>Contact</h3>
                                        <li>Follow on Twitter</li>
                                        <li>Like on Facebook</li>
                                        <li>Email me</li>
                                    </ul>{" "}
                                </Col>
                            </Row>
                            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;
