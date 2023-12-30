import React from "react";
import Jumbo from "./Jumbo";
import MainSection from "./MainSection";

const HomePage = (props) => {
    const { changeBeforeInit, BeforeInit, handleSecondLoad, secondLoadFetch, secondLoadValue } = props;

    return (
        <>
            <Jumbo
                changeBeforeInit={changeBeforeInit}
                BeforeInit={BeforeInit}
                handleSecondLoad={handleSecondLoad}
                secondLoadFetch={secondLoadFetch}
            />

            <MainSection BeforeInit={BeforeInit} secondLoadFetch={secondLoadFetch} secondLoadValue={secondLoadValue} />
        </>
    );
};

export default HomePage;
