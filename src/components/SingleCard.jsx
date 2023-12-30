import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingleCard = (props) => {
    const { arrayDatas, cardHidden, handleCardHidden, downloadImage, BeforeInit, defaultValues } = props;

    return (
        <>
            <div className="d-flex flex-wrap">
                {arrayDatas &&
                    arrayDatas.slice(0, 6).map((image, index) => (
                        <Col
                            style={{ display: cardHidden.includes(image.id) ? "none" : "block" }}
                            key={`key-fetch-${index}`}
                            sm={12}
                            md={6}
                            lg={4}
                        >
                            <Card className="m-2 mt-5 shadow card">
                                <Card.Img variant="top" src={image.src.original} className="dimension-card-img" />

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
                                            <Link to={`/detailSinglePage?${image.id}`}>
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

                {!arrayDatas &&
                    BeforeInit === true &&
                    defaultValues.map((movie, index) => (
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
        </>
    );
};

export default SingleCard;
