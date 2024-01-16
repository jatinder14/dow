import React from "react";
import { useNavigate } from "react-router-dom";

export function Governance() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    }

    return (
        <button className="link py-20" onClick={handleClick}>
            <span className="symbol">{"<"}</span> Back to governance
        </button>
    );
}
