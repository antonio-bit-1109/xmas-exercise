import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import InputSearch from "./InputSearch";

/*  vedere una galleria usando la stringa utilizzata per fare le altre fetch   */
const BigGallery = (props) => {
    const { Buttonis } = props;

    const [defaultValueForNow, setdefaultValueForNow] = useState("matrix");
    const [arrayofDatas, setArrayofDatas] = useState([]);
    console.log("ARRAY CON DATI FOTO", arrayofDatas);

    const [inputPressButton, setInputPressButton] = useState("");
    const [btnClicked, setBtnClicked] = useState(false);

    /* se buttons è una stringa truty la fetch verrà fatta con quel valore, altrimenti col valore di default di "defaultValueForNow" */
    useEffect(() => {
        if (Buttonis) {
            doAFetch(Buttonis);
        } else {
            doAFetch(defaultValueForNow);
        }
    }, [defaultValueForNow, Buttonis]);

    /* se btnclicked è true faccio la fetch con il valore ritornato dal inputpressbutton  */
    useEffect(() => {
        if (btnClicked) {
            doAFetch(inputPressButton);
        }

        return handlebtnClicked(false);
    }, [btnClicked, inputPressButton]);

    /* metodi per aggiornare l'input value e per gestire il click del bottone dell input seearch  */
    const handleinputPressButton = (value) => {
        setInputPressButton(value);
    };

    const handlebtnClicked = (value) => {
        setBtnClicked((prevBtnClicked) => {
            if (prevBtnClicked !== value) {
                return value;
            }
            return prevBtnClicked;
        });
    };

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
                    <div className="d-flex align-items-end">
                        <InputSearch
                            handleinputPressButton={handleinputPressButton}
                            handlebtnClicked={handlebtnClicked}
                        />
                    </div>
                    <Col>
                        {" "}
                        <Carousel fade>
                            {arrayofDatas.slice(0, 10).map((object, index) => (
                                <Carousel.Item interval={1000} className="my-5" key={`item-${index}`}>
                                    <div className="d-flex justify-content-center">
                                        <img src={object.src.landscape} alt="foto" />
                                    </div>

                                    <Carousel.Caption>
                                        <h3 className="fw-bold">{object.alt}</h3>
                                        <h4 className="fst-italic fw-semibold">{object.photographer}</h4>
                                        <a className="no-underline text-light" href={object.photographer_url}>
                                            <p className="m-0">Visita il profilo dell'artista</p>
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
