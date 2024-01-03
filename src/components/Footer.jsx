import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = (props) => {
    const { footerColor } = props;

    return (
        <div style={{ backgroundColor: footerColor }}>
            <Container>
                <Row>
                    <Col>
                        <div className="text-center py-5">
                            {" "}
                            <div>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. &#169; Accusantium consequatur
                                repudiandae minus iste eaque odit quaerat quos nesciunt inventore sed. &#208;
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="text-center py-5">
                            <a href="#">
                                {" "}
                                <div>back To top </div>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;
