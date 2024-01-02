import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import DetailsSingleCard from "./components/DetailsSingleCard";

function App() {
    /* prenditi in qualche modo l'id della card selezionata!!  */

    return (
        <div className="App">
            <Router>
                <NavBar />
                <Routes>
                    {<Route path="/homepage" element={<HomePage />} />}

                    <Route path="/detailSinglePage" element={<DetailsSingleCard />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
