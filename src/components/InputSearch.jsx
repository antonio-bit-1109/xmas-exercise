import React from "react";
import { Button, Col, Form } from "react-bootstrap";

const InputSearch = (props) => {
    const { handleinputPressButton, handlebtnClicked, handleButtonValue } = props;

    return (
        <>
            <Col xs={8} sm={8} md={6} lg={4} xl={3}>
                <div className="mt-3 d-flex flex-column justify-content-end">
                    <Form.Label htmlFor="inputPassword5">cosa stai cercando ? </Form.Label>
                    <Form.Control
                        className="rounded-0 rounded-start-pill"
                        onChange={(event) => {
                            handleinputPressButton(event.target.value);
                        }}
                        type="text"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                    />
                </div>
            </Col>
            <Col>
                <Button
                    onClick={() => {
                        handlebtnClicked(true);
                        handleButtonValue && handleButtonValue(null);
                    }}
                    className="rounded-0 rounded-end-pill"
                    variant="warning"
                >
                    Press Here
                </Button>
            </Col>
        </>
    );
};

export default InputSearch;
