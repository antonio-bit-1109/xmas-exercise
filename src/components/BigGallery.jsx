import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

/*  vedere una galleria usando la stringa utilizzata per fare le altre fetch   */
const BigGallery = () => {
    const [defaultValueForNow, setdefaultValueForNow] = useState("matrix");
    const [arrayofDatas, setArrayofDatas] = useState([]);
    console.log("ARRAY CON DATI FOTO", arrayofDatas);

    useEffect(() => {
        doAFetch(defaultValueForNow);
    }, [defaultValueForNow]);

    const doAFetch = (value) => {
        const options = {
            method: "GET",
            headers: {
                Authorization: "7Ye7PHnNDdVmd43T5cthTwaF0I2AipmjtizxjFtVcXnzQIgCqJYlTLXP",
                "Content-type": "application/json",
            },
        };

        fetch(`https://api.pexels.com/v1/search?query=${value}`, options)
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
                console.log(data.photos);
                setArrayofDatas(data.photos);
            });
    };

    return (
        <>
            {" "}
            <Container>
                {" "}
                <Row>
                    {" "}
                    <Col>
                        {" "}
                        <Carousel>
                            {arrayofDatas.slice(0, 6).map((object, index) => (
                                <Carousel.Item className="my-5" key={`item-${index}`}>
                                    <div className="d-flex justify-content-center">
                                        <img src={object.src.landscape} alt="foto" />
                                    </div>

                                    <Carousel.Caption>
                                        <h3>{object.alt}</h3>
                                        <h4>{object.photographer}</h4>
                                        <a className="no-underline text-light" href={object.photographer_url}>
                                            <p>Visita il profilo dell'artista</p>
                                        </a>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </Col>{" "}
                </Row>
            </Container>
        </>
    );
};

export default BigGallery;
