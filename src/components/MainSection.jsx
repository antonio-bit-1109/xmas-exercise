import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";

import InputSearch from "./InputSearch";
import SingleCard from "./SingleCard";

const MainSection = (props) => {
    const [inputPressButton, setInputPressButton] = useState("");
    const [btnClicked, setBtnClicked] = useState(false);
    const [cardHidden, setcardHidden] = useState([]);
    const [arrayDatas, setArrayDatas] = useState(null);

    console.log(arrayDatas);
    console.log("array card hidden", cardHidden);

    const { itemToSearchAgain, Buttonis, handleButtonValue, handleShowFooter } = props;

    console.log(Buttonis);

    console.log(arrayDatas); /* array con dati della get  */
    console.log("itemtosearchagainInMainSection", itemToSearchAgain);

    const handleCardHidden = (id) => {
        setcardHidden((previusCards) => {
            if (previusCards.includes.id) {
                return previusCards.filter((cardId) => cardId !== id);
            } else {
                return [...previusCards, id];
            }
        });
    };

    /* passare da card default a fetch attivata dai bottoni in  jumbo  */
    useEffect(() => {
        if (Buttonis === "summer") {
            fetchAGet("summer");
        }
        if (Buttonis === "rain") {
            fetchAGet("rain");
        }

        setTimeout(() => {
            return handleButtonValue("");
        }, 10000);
    }, [Buttonis, handleButtonValue]);

    /* fetch a partire dalla stringa inserita in input  */
    useEffect(() => {
        if (btnClicked === true) {
            fetchAGet(inputPressButton);
        }
        return riportabtnClickalValoreDefault;
    }, [btnClicked, inputPressButton]);

    /* fetch passando il valore dell'input, preso dalla pagina di DetailsSingleCard, passato a homepage e a mainsection per fare la fetch  */
    useEffect(() => {
        if (itemToSearchAgain) {
            fetchAGet(itemToSearchAgain);
        }
    }, [itemToSearchAgain]);

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
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const handleinputPressButton = (value) => {
        setInputPressButton(value);
    };

    /* download dell immagine nella single card  */
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
                <SingleCard
                    arrayDatas={arrayDatas}
                    cardHidden={cardHidden}
                    handleCardHidden={handleCardHidden}
                    downloadImage={downloadImage}
                    inputPressButton={inputPressButton}
                    itemToSearchAgain={itemToSearchAgain}
                    Buttonis={Buttonis}
                    /*    handleShowFooter={handleShowFooter} */
                />
            </Container>
        </div>
    );
};

export default MainSection;
