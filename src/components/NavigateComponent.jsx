import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

/* al primo montaggio del componente, questo utilizza una funzione di browser router che, attraverso a prop navigate, ti riporta ad una pagina scelta e prente in una route  */
const NavigateComponent = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate("/defaultHomePage");
    }, []);

    return <div></div>;
};

export default NavigateComponent;
