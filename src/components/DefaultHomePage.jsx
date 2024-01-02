import React from "react";
import { Button, Card, Col, Container } from "react-bootstrap";
import DefaultImg from "../images/default.png";
import { useState } from "react";

const DefaultHomePage = (props) => {
    const [defaultValues, setDefaultValues] = useState(
        Array.from({ length: 6 }, () => ({
            img: DefaultImg,
            title: "Card Title",
            parag: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
            textbutt1: "view",
            textbutt2: "Edit",
            time: "9 min",
        }))
    );

    return (
        <div>
            <Container>
                <div className="d-flex flex-wrap">
                    {defaultValues.map((movie, index) => (
                        <Col key={`key-default-${index}`} sm={12} md={6} lg={4}>
                            <Card style={{ height: "400px" }} className="m-2 mt-5">
                                <Card.Img variant="top" src={movie.img} className="dimension-card-img" />
                                <Card.Body>
                                    <Card.Title>{movie.title}</Card.Title>
                                    <Card.Text>{movie.parag}</Card.Text>
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            {" "}
                                            <Button variant="btn btn-outline-secondary">{movie.textbutt1}</Button>
                                            <Button className="ms-2" variant="btn btn-outline-secondary">
                                                {movie.textbutt2}
                                            </Button>
                                        </div>
                                        <p>{movie.time}</p>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default DefaultHomePage;
