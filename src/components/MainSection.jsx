import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import DefaultImg from "../images/default.png";
import InputSearch from "./InputSearch";

const MainSection = (props) => {
    const [searchItem, setSearchItem] = useState("summer");
    const [inputPressButton, setInputPressButton] = useState("");
    const [btnClicked, setBtnClicked] = useState(false);
    const [arrayDatas, setArrayDatas] = useState(null);
    const [cardHidden, setcardHidden] = useState([]);
    console.log("array card hidden", cardHidden);
    console.log(arrayDatas);

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

    const { BeforeInit, secondLoadFetch, secondLoadValue } = props;

    const handleCardHidden = (id) => {
        setcardHidden((previusCards) => {
            if (previusCards.includes.id) {
                return previusCards.filter((cardId) => cardId !== id);
            } else {
                return [...previusCards, id];
            }
        });
    };

    /* passare da card default a fetch attivata dal primo bottone in jumbo  */
    useEffect(() => {
        if (BeforeInit === false) {
            fetchAGet(searchItem);
        }
        if (BeforeInit === true) {
            setArrayDatas(null);
        }
    }, [BeforeInit, searchItem]);

    /* fetch a partire dalla stringa inserita in input  */
    useEffect(() => {
        if (btnClicked === true) {
            fetchAGet(inputPressButton);
        }
        return riportabtnClickalValoreDefault;
    }, [btnClicked, inputPressButton]);

    /* fetch al click del secondo bottone in jumbo */
    useEffect(() => {
        if (secondLoadFetch !== false) {
            fetchAGet(secondLoadValue);
        }
    }, [secondLoadFetch, secondLoadValue]);

    const riportabtnClickalValoreDefault = () => {
        setBtnClicked(false);
    };

    const handlebtnClicked = (value) => {
        setBtnClicked((prevBtnClicked) => {
            if (prevBtnClicked !== value) {
                return value;
            }
            return prevBtnClicked;
        });
    };

    const fetchAGet = (value) => {
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
                setArrayDatas(data.photos);
            });
    };

    const handleinputPressButton = (value) => {
        setInputPressButton(value);
    };

    const downloadImage = (file, fileName) => {
        // Extract the file extension from the URL
        const fileExtension = file.split(".").pop();

        fetch(file)
            .then((response) => {
                if (response.ok) {
                    return response.blob();
                }
            })
            .then((dataBlob) => {
                const url = window.URL.createObjectURL(dataBlob);
                const link = document.createElement("a");

                // Set the download attribute with the specified file name and extension
                link.href = url;
                link.setAttribute("download", `${fileName}.${fileExtension}`);

                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            })
            .catch((error) => {
                console.error("Error downloading image:", error);
            });
    };

    return (
        <div className="bg-sfondoMain">
            <Container>
                <Row>
                    <div className="d-flex align-items-end">
                        <InputSearch
                            handleinputPressButton={handleinputPressButton}
                            handlebtnClicked={handlebtnClicked}
                        />
                    </div>
                </Row>
            </Container>

            <Container>
                <div className="d-flex flex-wrap">
                    {arrayDatas &&
                        arrayDatas.slice(0, 9).map((image, index) => (
                            <Col
                                style={{ display: cardHidden.includes(image.id) ? "none" : "block" }}
                                key={`key-fetch-${index}`}
                                sm={12}
                                md={6}
                                lg={4}
                            >
                                <Card className="m-2 mt-5 shadow">
                                    <Card.Img variant="top" src={image.src.original} className="dimension-card-img" />
                                    <Card.Body style={{ minHeight: "320px" }}>
                                        <Card.Title>{image.alt}</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                        <Card.Text className="fw-bold">{image.photographer}</Card.Text>
                                        <div className="d-flex flex-column">
                                            {" "}
                                            <a className="m-1" href={image.src.original}>
                                                Guarda l'originale
                                            </a>
                                            <a className="m-1" href={image.photographer_url}>
                                                Vai al profilo dell'autore
                                            </a>
                                        </div>

                                        <div className="d-flex justify-content-between">
                                            <div className="d-flex gap-2 mt-2">
                                                {" "}
                                                <Button variant="btn btn-outline-secondary">View</Button>
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
                                                <p className="m-0">{image.id}</p>
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
