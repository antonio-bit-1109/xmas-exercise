import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import Jumbo from "./components/Jumbo";
import MainSection from "./components/MainSection";
import { useState } from "react";
/* import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; */

function App() {
    const [BeforeInit, SetBeforeInit] = useState(true);
    const [secondLoadFetch, setSecondLoadFetch] = useState(false);
    const [secondLoadValue, setSecondLoadValue] = useState("winter");

    const changeBeforeInit = (value) => {
        SetBeforeInit(value);
    };

    const handleSecondLoad = (value) => {
        setSecondLoadFetch(value);
    };

    return (
        <div className="App">
            <NavBar />
            <Jumbo
                changeBeforeInit={changeBeforeInit}
                BeforeInit={BeforeInit}
                handleSecondLoad={handleSecondLoad}
                secondLoadFetch={secondLoadFetch}
            />

            <MainSection BeforeInit={BeforeInit} secondLoadFetch={secondLoadFetch} secondLoadValue={secondLoadValue} />
        </div>
    );
}

export default App;
