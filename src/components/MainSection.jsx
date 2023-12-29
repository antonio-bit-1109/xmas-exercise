import React, { useEffect, useState } from "react";
import { Col, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import DefaultImg from "../images/default.png";

const MainSection = () => {
    const [NomeSaga, setNomeSaga] = useState("harry Potter");
    const [arrayDatas, setArrayDatas] = useState(null);
    const [BeforeInit, SetBeforeInit] = useState(true);

    const [defaultValues, setDefaultValues] = useState(
        Array.from({ length: 9 }, () => ({
            img: DefaultImg,
            title: "Card Title",
            parag: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
            textbutt1: "view",
            textbutt2: "Edit",
            time: "9 min",
        }))
    );
    console.log(arrayDatas); /* array con dati della get  */

    useEffect(() => {
        if (!BeforeInit) {
            fetchAGet();
        } else {
            return;
        }
    }, [BeforeInit]);

    const fetchAGet = () => {
        const options = {
            method: "GET",
            headers: {},
        };

        fetch(`http://www.omdbapi.com/?s=${NomeSaga}&apikey=195f13a4`, options)
            .then((response) => {
                console.log(response);
                if (!response.ok) {
                    if (response.status > 400 && response.status < 500) {
                        if (response.status === 429) {
                            throw new Error("429 INFAME, PER TE TANTE COSE BRUTTE, (tipo le lame)");
                        } else {
                            throw new Error("STAI CAPPELLANDO, RIGUARDA QUELLO CHE HAI SCRITTO");
                        }
                    }
                    if (response.status > 500 && response.status < 600) {
                        throw new Error("SERVER SPOMPATO, NON FUNZIA??");
                    }
                } else {
                    return response.json();
                }
            })
            .then((data) => {
                console.log(data.Search);
                setArrayDatas(data.Search);
            });
    };

    return (
        <div className="bg-sfondoMain">
            <Container>
                <div className="d-flex flex-wrap">
                    {arrayDatas &&
                        arrayDatas.slice(0, 9).map((movie, index) => (
                            <Col key={`key-fetch-${index}`} sm={12} md={6} lg={4}>
                                <Card className="m-2 mt-5">
                                    <Card.Img variant="top" src={movie.Poster} className="dimension-card-img" />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}

                    {!arrayDatas &&
                        BeforeInit === true &&
                        defaultValues.map((movie, index) => (
                            <Col key={`key-default-${index}`} sm={12} md={6} lg={4}>
                                <Card className="m-2 mt-5">
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

export default MainSection;
