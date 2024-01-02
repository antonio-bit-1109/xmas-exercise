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
    const [Button, setButton] = useState("");
    console.log(Button);

    const handleButtonValue = (value) => {
        setButton(value);
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
                                <div style={{ display: Button === "" ? "block" : "none" }}>
                                    <Jumbo handleButtonValue={handleButtonValue} />
                                    <DefaultHomePage />
                                </div>
                            </>
                        }
                    />

                    <Route
                        path="/homepage"
                        element={<HomePage Button={Button} handleButtonValue={handleButtonValue} />}
                    />

                    <Route path="/detailSinglePage" element={<DetailsSingleCard />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
