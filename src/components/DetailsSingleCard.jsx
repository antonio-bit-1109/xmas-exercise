import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const DetailsSingleCard = (props) => {
    const { arrayDatas } = props;
    console.log(arrayDatas);

    return (
        <>
            {" "}
            <Card>
                <Card.Img variant="top" src={arrayDatas.url} />
                <Card.Body>
                    <Card.Title>{arrayDatas.alt}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </>
    );
};

export default DetailsSingleCard;
