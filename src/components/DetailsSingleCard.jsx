import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import { ArrowLeft } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const DetailsSingleCard = (props) => {
    const [imageObj, setImageObj] = useState(null);
    console.log(imageObj);

    /* parametri presi dal click sulla singleCard passando l'id dell'immagine */
    const params = new URLSearchParams(window.location.search);
    console.log(params);

    const id = params.get("idImage");
    console.log("id", id);

    useEffect(() => {
        /* fai la fetch solo quando cambia l'id passato */
        letMakeAfetch(id);
    }, [id]);

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
                <Link to={"/homepage"}>
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
                <Card style={{ width: "80%", height: "auto" }} className="m-auto mt-5">
                    <Card.Img variant="top" src={imageObj.src.landscape} />
                    <Card.Body>
                        <Card.Title>{imageObj.alt}</Card.Title>
                        <Card.Text>{imageObj.photographer}</Card.Text>
                        <Card.Text>{imageObj.url}</Card.Text>
                    </Card.Body>
                </Card>
            )}
        </div>
    );
};

export default DetailsSingleCard;
