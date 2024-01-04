import React, { useEffect, useRef, useState } from "react";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import { ArrowLeft } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import ColorThief from "colorthief";

const DetailsSingleCard = (props) => {
    const [imageObj, setImageObj] = useState(null);
    console.log(imageObj);

    /* parametri presi dal click sulla singleCard passando l'id dell'immagine */
    const params = new URLSearchParams(window.location.search);
    console.log(params);
    const id = params.get("idImage");
    console.log("id", id);

    /* mi porto dentro la stringa inserita nell input value al momento della ricerca, per poi riutilizzarla in una fetch quando clicco la freccia per tornare indietro  */
    const inputPressButton = new URLSearchParams(window.location.search);
    console.log(inputPressButton);
    const itemToSearchAgain = inputPressButton.get("inputPressButton");
    console.log("itemToSearchAgain", itemToSearchAgain);

    useEffect(() => {
        /* fai la fetch solo quando cambia l'id passato */
        letMakeAfetch(id);
    }, [id]);

    const changeBgColorThief = () => {};

    const letMakeAfetch = (defaultId) => {
        const options = {
            method: "GET",
            headers: {
                Authorization: "7Ye7PHnNDdVmd43T5cthTwaF0I2AipmjtizxjFtVcXnzQIgCqJYlTLXP",
                "Content-type": "application/json",
            },
        };

        fetch(`https://api.pexels.com/v1/photos/${defaultId}`, options)
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
                setImageObj(data);
                console.log(data);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <div>
            <div className="d-flex alignitems-center w-auto">
                <Link to={`/homepage?itemToSearchAgain=${itemToSearchAgain}`}>
                    <ArrowLeft className="display-2 m-4" />
                </Link>
            </div>{" "}
            {imageObj === null ? (
                <div className="h-50 d-flex justify-content-center align-items-center">
                    {" "}
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            ) : (
                <Card
                    style={{
                        width: "70%",
                        height: "auto",
                    }}
                    className="m-auto border-0"
                >
                    <Card.Title className="display-4 mb-3">{imageObj.alt}</Card.Title>
                    <Card.Img variant="top" src={imageObj.src.landscape} />
                    <Card.Body>
                        <Card.Text className="fw-bold fs-3">{imageObj.photographer}</Card.Text>
                        <Card.Text>
                            Phasellus vel rutrum ante. Curabitur gravida consectetur enim ac pellentesque. Aliquam
                            placerat turpis vel urna ornare dictum. Integer elementum mattis est. Sed tempor quam metus,
                            eget varius risus convallis non. Maecenas cursus, lacus a iaculis placerat, velit magna
                            malesuada massa, ut pharetra tortor neque sit amet eros. Nulla id diam sit amet neque
                            facilisis accumsan. Cras nec enim sed eros condimentum efficitur. Suspendisse in turpis ex.
                            Proin efficitur at lacus ac blandit. Sed posuere ultrices est vitae accumsan. Fusce sit amet
                            lobortis libero
                        </Card.Text>
                        <a href={imageObj.url}>
                            {" "}
                            <Card.Text>Guarda il Profilo dell'artista </Card.Text>
                        </a>
                    </Card.Body>
                </Card>
            )}
        </div>
    );
};

export default DetailsSingleCard;
