import React, { useState } from "react";
import Jumbo from "./Jumbo";
import MainSection from "./MainSection";

const HomePage = (props) => {
    /* acchiappo il valore ritornato dal componente DetailsSingleCard e lo prendo come props da usare in MainSection per rifare la fetch, in questo modo, al click del bottone "torna indietro" ritorno alla stessa pagina visualizzata prima di cliccare su 'view details'?? (forse) " */

    const handleTheValueFromDetailsSingleCard = () => {
        const params = new URLSearchParams(window.location.search);
        console.log(params);

        const itemToSearchAgain = params.get("itemToSearchAgain");
        console.log("itemToSearchAgain:", itemToSearchAgain);

        return (
            <>
                <Jumbo />

                {/* esiste  itemToSearchAgain? usalo come props, altrimenti renderizza mainsection senza itemToSearchAgain come props*/}
                {itemToSearchAgain ? <MainSection itemToSearchAgain={itemToSearchAgain} /> : <MainSection />}
            </>
        );
    };

    return <>{handleTheValueFromDetailsSingleCard()}</>;
};

export default HomePage;
