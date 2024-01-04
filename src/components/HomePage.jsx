import Jumbo from "./Jumbo";
import MainSection from "./MainSection";

const HomePage = (props) => {
    /* acchiappo il valore ritornato dal componente DetailsSingleCard e lo prendo come props da usare in MainSection per rifare la fetch, in questo modo, al click del bottone "torna indietro" ritorno alla stessa pagina visualizzata prima di cliccare su 'view details'?? (forse) " */

    const { Buttonis, handleButtonValue, handleShowFooter } = props;

    const handleTheValueFromDetailsSingleCard = () => {
        const params = new URLSearchParams(window.location.search);
        console.log(params);

        const itemToSearchAgain = params.get("itemToSearchAgain");
        console.log("itemToSearchAgain:", itemToSearchAgain);

        return (
            <>
                <Jumbo handleButtonValue={handleButtonValue} />

                {/* esiste  itemToSearchAgain? usalo come props, altrimenti renderizza mainsection senza itemToSearchAgain come props*/}
                {itemToSearchAgain ? (
                    <MainSection
                        handleButtonValue={handleButtonValue}
                        Buttonis={Buttonis}
                        itemToSearchAgain={itemToSearchAgain}
                        /*  handleShowFooter={handleShowFooter} */
                    />
                ) : (
                    <MainSection
                        handleButtonValue={handleButtonValue}
                        Buttonis={Buttonis}
                        /*  handleShowFooter={handleShowFooter} */
                    />
                )}
            </>
        );
    };

    return <>{handleTheValueFromDetailsSingleCard()}</>;
};

export default HomePage;
