import React from "react";
import Jumbo from "./Jumbo";
import MainSection from "./MainSection";

const HomePage = (props) => {
    const { changeBeforeInit, BeforeInit, handleSecondLoad, secondLoadFetch, secondLoadValue } = props;

    /* acchiappo il valore ritornato dal componente DetailsSingleCard e lo prendo come props da usare in MainSection per rifare la fetch, in questo modo, al click del bottone "torna indietro" ritorno alla stessa pagina visualizzata prima di cliccare su 'view details'?? (forse) " */

    const handleTheValueFromDetailsSingleCard = () => {
        const params = new URLSearchParams(window.location.search);
        console.log(params);

        const itemToSearchAgain = params.get("itemToSearchAgain");
        console.log("itemToSearchAgain:", itemToSearchAgain);

        return (
            <>
                <Jumbo
                    changeBeforeInit={changeBeforeInit}
                    BeforeInit={BeforeInit}
                    handleSecondLoad={handleSecondLoad}
                    secondLoadFetch={secondLoadFetch}
                />

                {/* esiste  itemToSearchAgain? usalo come props, altrimenti renderizza mainsection senza itemToSearchAgain come props*/}
                {itemToSearchAgain ? (
                    <MainSection
                        BeforeInit={BeforeInit}
                        secondLoadFetch={secondLoadFetch}
                        secondLoadValue={secondLoadValue}
                        itemToSearchAgain={itemToSearchAgain}
                    />
                ) : (
                    <MainSection
                        BeforeInit={BeforeInit}
                        secondLoadFetch={secondLoadFetch}
                        secondLoadValue={secondLoadValue}
                    />
                )}
            </>
        );
    };

    return <>{handleTheValueFromDetailsSingleCard()}</>;
};

export default HomePage;
