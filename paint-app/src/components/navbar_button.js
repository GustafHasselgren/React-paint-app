import React from "react";

export default function NavbarButton({onClick, text}) {
    return (
        <button className="navbar-button" onClick={onClick}>{text}</button>
    );
};