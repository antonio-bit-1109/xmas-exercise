import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import DetailsSingleCard from "./components/DetailsSingleCard";

function App() {
    const [BeforeInit, SetBeforeInit] = useState(true);
    const [secondLoadFetch, setSecondLoadFetch] = useState(false);
    const [secondLoadValue, setSecondLoadValue] = useState("winter");
    const [start, setStart] = useState(true);
    const [arrayDatas, setArrayDatas] = useState(null);

    /* prenditi in qualche modo l'id della card selezionata!!  */
    const [idarray, setIdArray] = useState(null);
    const changeBeforeInit = (value) => {
        SetBeforeInit(value);
    };

    const handleSecondLoad = (value) => {
        setSecondLoadFetch(value);
    };

    return (
        <div className="App">
            <Router>
                <NavBar />
                <Routes>
                    {start && (
                        <Route
                            path="/homepage"
                            element={
                                <HomePage
                                    changeBeforeInit={changeBeforeInit}
                                    BeforeInit={BeforeInit}
                                    handleSecondLoad={handleSecondLoad}
                                    secondLoadFetch={secondLoadFetch}
                                    secondLoadValue={secondLoadValue}
                                    arrayDatas={arrayDatas}
                                    setArrayDatas={setArrayDatas}
                                />
                            }
                        />
                    )}

                    <Route path="/detailSinglePage" element={<DetailsSingleCard arrayDatas={arrayDatas} />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
