import React, { useState } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Heart, HeartFill } from "react-bootstrap-icons";

const SingleCard = (props) => {
    const { arrayDatas, cardHidden, handleCardHidden, downloadImage, inputPressButton, itemToSearchAgain, Buttonis } =
        props;
    console.log(arrayDatas);

    const [heartClicks, setHeartClicks] = useState(Array(arrayDatas.length).fill(false));
    console.log(heartClicks);

    const handleHeartClicks = (index) => {
        setHeartClicks((prevState) => {
            const newHeartValue = [...prevState];
            newHeartValue[index] = !prevState[index];
            return newHeartValue;
        });
    };

    return (
        <>
            <div className="d-flex flex-wrap">
                {arrayDatas &&
                    heartClicks &&
                    arrayDatas.slice(0, 6).map((image, i) => (
                        <Col
                            style={{
                                display: cardHidden.includes(image.id) ? "none" : "block",
                                marginTop: i <= 2 ? "3rem" : "",
                                marginBottom: i >= 3 ? "3rem" : "",
                            }}
                            key={`key-fetch-${i}`}
                            sm={12}
                            md={6}
                            lg={4}
                        >
                            <Card className="m-2 mt-3 shadow pippo">
                                <div className="position-relative">
                                    <Card.Img variant="top" src={image.src.original} className="dimension-card-img " />

                                    <button
                                        key={`icon-button${i}`}
                                        onClick={() => handleHeartClicks(i)}
                                        className="position-absolute bottom-custom right-custom fs-3 border-0 bg-transparent text-danger"
                                    >
                                        {!heartClicks[i] ? <Heart /> : <HeartFill />}
                                    </button>
                                </div>
                                <Card.Body>
                                    <Card.Title>{image.alt}</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of the
                                        card's content.
                                    </Card.Text>
                                    <Card.Text className="fw-bold m-0">{image.photographer}</Card.Text>
                                    <div className="d-flex flex-column">
                                        {" "}
                                        <a className="m-1" href={image.src.original}>
                                            Guarda l'originale
                                        </a>
                                        <a className="m-1" href={image.photographer_url}>
                                            Vai al profilo dell'autore
                                        </a>
                                    </div>

                                    <div className="d-flex justify-content-between flex-wrap">
                                        <div className="d-flex gap-2 mt-2">
                                            {" "}
                                            <Link
                                                to={`/detailSinglePage?idImage=${image.id}&inputPressButton=${
                                                    inputPressButton || itemToSearchAgain || Buttonis
                                                }`}
                                            >
                                                <Button variant="btn btn-outline-secondary">View Details</Button>
                                            </Link>
                                            <Button
                                                onClick={() => {
                                                    handleCardHidden(image.id);
                                                }}
                                                variant="btn btn-outline-secondary"
                                            >
                                                Hide
                                            </Button>
                                            <Button
                                                onClick={() => downloadImage(image.src.original, image.alt)}
                                                variant="btn btn-outline-primary"
                                            >
                                                Download
                                            </Button>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <p className="m-1">{image.id}</p>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
            </div>
        </>
    );
};

export default SingleCard;
