import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import DetailsSingleCard from "./components/DetailsSingleCard";

function App() {
    const [BeforeInit, SetBeforeInit] = useState(true);

    /* prenditi in qualche modo l'id della card selezionata!!  */

    const changeBeforeInit = (value) => {
        SetBeforeInit(value);
    };

    return (
        <div className="App">
            <Router>
                <NavBar />
                <Routes>
                    {
                        <Route
                            path="/homepage"
                            element={<HomePage changeBeforeInit={changeBeforeInit} BeforeInit={BeforeInit} />}
                        />
                    }

                    <Route path="/detailSinglePage" element={<DetailsSingleCard />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
