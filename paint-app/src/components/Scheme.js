import React from "react";
import { Link } from "react-router-dom";

export default function Scheme({id}) {

    return (
        <Link to={'scheme/:' + id} state={{id:id}}>
            <div className="scheme">
                <div>
                    <img className="scheme-img" src={`${process.env.PUBLIC_URL}/assets/images/Warhammer-logo.png`}></img>
                </div>
                <div className="scheme-text">
                    {id}
                </div>
            </div>
        </Link>
    );
};