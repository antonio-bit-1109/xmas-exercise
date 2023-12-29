import React, { useEffect, useState } from "react";
import { Col, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const MainSection = () => {
    const [NomeSaga, setNomeSaga] = useState("harry Potter");
    const [arrayDatas, setArrayDatas] = useState(null);
    console.log(arrayDatas); /* array con dati della get  */

    useEffect(() => {
        fetchAGet();
    }, []); /* lo fa una volta sola così ?? */

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
                    {arrayDatas.map((movie, index) => (
                        <Col sm={12} md={6} lg={4}>
                            <Card className="m-2 mt-5" key={`key${index}`}>
                                <Card.Img variant="top" src={movie.Poster} className="dimension-card-img" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of the
                                        card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
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
