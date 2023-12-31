import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import DetailsSingleCard from "./components/DetailsSingleCard";
import DefaultHomePage from "./components/DefaultHomePage";
import Jumbo from "./components/Jumbo";
import { useState } from "react";
import Footer from "./components/Footer";
import NavigateComponent from "./components/NavigateComponent";
import NavBar from "./components/NavBar";
import BigGallery from "./components/BigGallery";

function App() {
    const [Buttonis, setButton] = useState(null);
    console.log(Buttonis);

    /*     const [showFooter, setShowFooter] = useState(true); */

    const handleButtonValue = (value) => {
        return setButton(value);
    };

    /* approccio più corretto per cambiare il valore di uno stato, basandoti sul valore precedente  */
    /*     const handleShowFooter = () => {
        setShowFooter((prevState) => !prevState);
    };
 */
    return (
        <div className="App">
            <Router>
                {/* quando montato, naviga verso  "/defaultHomePage"*/}
                <NavigateComponent />

                <Routes>
                    <Route
                        path="/defaultHomePage"
                        element={
                            <>
                                <div style={{ display: Buttonis !== "" ? "block" : "none" }}>
                                    <NavBar />
                                    <Jumbo handleButtonValue={handleButtonValue} />
                                    <DefaultHomePage />
                                    <Footer footerColor={"#E9EEF1"} />
                                </div>
                            </>
                        }
                    />

                    <Route
                        path="/homepage"
                        element={
                            <>
                                {" "}
                                <NavBar />
                                <HomePage Buttonis={Buttonis} handleButtonValue={handleButtonValue} />
                                <Footer />
                            </>
                        }
                    />
                    <Route
                        path="/Gallery"
                        element={
                            <>
                                <NavBar />
                                <BigGallery handleButtonValue={handleButtonValue} Buttonis={Buttonis} />{" "}
                                <Footer footerColor={"#E9EEF1"} />{" "}
                            </>
                        }
                    />

                    <Route path="/detailSinglePage" element={<DetailsSingleCard />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
