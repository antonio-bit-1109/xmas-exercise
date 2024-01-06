import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import NavBarImg from "../images/logo.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            {" "}
            <Navbar expand="none" className="bg-sfondo" variant="dark">
                <Container>
                    <div className="d-flex align-items-center justify-content-between w-100 ">
                        <div className="d-flex align-items-center">
                            <Link to="/defaultHomePage">
                                <div>
                                    <img className="style-logo-navbar" src={NavBarImg} alt="logo" />
                                </div>
                            </Link>

                            <Link className="no-underline" to={"/Gallery"}>
                                <div className="text-light ms-4 fs-5"> Gallery</div>
                            </Link>
                        </div>
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
                                        <a href="https://twitter.com/?lang=en">
                                            <li>Follow on Twitter</li>
                                        </a>
                                        <a href="https://www.facebook.com/">
                                            {" "}
                                            <li>Like on Facebook</li>
                                        </a>
                                        <a href="mailto:antonio.rizzuti@hotmail.com">
                                            {" "}
                                            <li>Email me</li>
                                        </a>
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
