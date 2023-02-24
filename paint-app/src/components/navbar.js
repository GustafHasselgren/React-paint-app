
import {Link } from "react-router-dom";
import NavbarButton from "./navbar_button";
import Scheme from './Scheme';


export default function Navbar({addScheme}) {


    return (
            <div className="navbar">
                <span>
                    <Link to='/'>
                        <NavbarButton text='Home'></NavbarButton>
                    </Link>
                </span>
                <span>
                    <Link to='/about'>
                        <NavbarButton text='About'></NavbarButton>
                    </Link>
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