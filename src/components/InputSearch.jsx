import React from "react";
import { Button, Col, Form } from "react-bootstrap";

const InputSearch = () => {
    return (
        <>
            <Col sm={12} md={6} lg={4} xl={3}>
                <div className="mt-3 d-flex flex-column justify-content-end">
                    <Form.Label htmlFor="inputPassword5">cosa stai cercando ? </Form.Label>
                    <Form.Control type="password" id="inputPassword5" aria-describedby="passwordHelpBlock" />
                </div>
            </Col>
            <Col>
                <Button variant="warning">Press Here</Button>
            </Col>
        </>
    );
};

export default InputSearch;
