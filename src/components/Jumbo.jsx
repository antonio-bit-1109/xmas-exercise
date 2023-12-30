import { Button } from "react-bootstrap";
import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

const Jumbo = (props) => {
    const { changeBeforeInit, BeforeInit, handleSecondLoad, secondLoadFetch } = props;

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
                                <Button onClick={() => changeBeforeInit(!BeforeInit)} variant="primary">
                                    Load Image
                                </Button>
                                <Button
                                    onClick={() => {
                                        handleSecondLoad(!secondLoadFetch);
                                    }}
                                    className="ms-2"
                                    variant="secondary"
                                >
                                    Load Second Image
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Jumbo;
