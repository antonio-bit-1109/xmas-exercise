import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import Jumbo from "./components/Jumbo";
import MainSection from "./components/MainSection";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Jumbo />
            <MainSection />
        </div>
    );
}

export default App;
