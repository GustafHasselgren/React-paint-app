import React from "react";
import NavbarButton from "./navbar_button";
import Scheme from './Scheme';


export default function Navbar({addScheme}) {


    return (
        <div className="navbar">
            <span>
                <NavbarButton></NavbarButton>
            </span>
            <span>
                <NavbarButton></NavbarButton>
            </span>
            <span>
                <NavbarButton></NavbarButton>
            </span>
            <span>
                <NavbarButton onClick={() => {addScheme(Scheme)}} text='+'></NavbarButton>
            </span>
        </div>
    );
};