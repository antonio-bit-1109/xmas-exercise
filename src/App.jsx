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
import Footer from "./components/Footer";

function App() {
    const [Buttonis, setButton] = useState("");
    console.log(Buttonis);

    const [showFooter, setShowFooter] = useState(true);

    const handleButtonValue = (value) => {
        setButton(value);
    };

    /* approccio più corretto per cambiare il valore di uno stato, basandoti sul valore precedente  */
    const handleShowFooter = () => {
        setShowFooter((prevState) => !prevState);
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
                                <div style={{ display: Buttonis === "" ? "block" : "none" }}>
                                    <Jumbo handleButtonValue={handleButtonValue} />
                                    <DefaultHomePage />
                                </div>
                            </>
                        }
                    />

                    <Route
                        path="/homepage"
                        element={
                            <>
                                <HomePage
                                    Buttonis={Buttonis}
                                    handleButtonValue={handleButtonValue}
                                    handleShowFooter={handleShowFooter}
                                />
                                <Footer />
                            </>
                        }
                    />

                    <Route
                        path="/detailSinglePage"
                        element={<DetailsSingleCard handleShowFooter={handleShowFooter} />}
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
