import { Button } from "react-bootstrap";
import React, { useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

const Jumbo = (props) => {
    const { changeBeforeInit, BeforeInit } = props;

    return (
        <div className="bg-light">
            <Container>
                <Row>
                    <Col>
                        <div className="d-flex justify-content-center my-5 p-5">
                            <div className="text-center">
                                <h3 className="my-3 fs-1 fw-normal">Lorem, ipsum. dolor</h3>
                                <p className="mb-4">
                                    This page will dynamically load pictures from the web, and display them in a cool
                                    way!
                                </p>
                                <div className="d-flex flex-column align-items-center gap-2 d-md-block">
                                    <Button
                                        onClick={() => {
                                            changeBeforeInit(!BeforeInit);
                                        }}
                                        variant="primary"
                                    >
                                        {" "}
                                        Load First Image{" "}
                                    </Button>
                                    <Button onClick={() => {}} className="ms-2" variant="secondary">
                                        Load Second Image
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Jumbo;
