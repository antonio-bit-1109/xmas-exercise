import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import DetailsSingleCard from "./components/DetailsSingleCard";
import DefaultHomePage from "./components/DefaultHomePage";
import Jumbo from "./components/Jumbo";
import { useState } from "react";
import NavBar from "./components/NavBar";

function App() {
    const [firstButton, setFirstButton] = useState("");
    console.log(firstButton);
    const [secondButton, setSecondButton] = useState("");

    const handleFirstButtonValue = (value) => {
        setFirstButton(value);
    };

    return (
        <div className="App">
            <Router>
                <NavBar />
                <Routes>
                    <Route
                        path="/defaultHomePage"
                        element={
                            <>
                                <div style={{ display: firstButton !== "" || firstButton === null ? "none" : "block" }}>
                                    <Jumbo handleFirstButtonValue={handleFirstButtonValue} />
                                    <DefaultHomePage />
                                </div>
                            </>
                        }
                    />

                    <Route
                        path="/homepage"
                        element={<HomePage firstButton={firstButton} handleFirstButtonValue={handleFirstButtonValue} />}
                    />

                    <Route path="/detailSinglePage" element={<DetailsSingleCard />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
