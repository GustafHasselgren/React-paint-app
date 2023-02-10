import React from "react";

export default function Scheme({}) {


    return (
        <div className="scheme">
            <div>
                <img className="scheme-img" src={`${process.env.PUBLIC_URL}/assets/images/Warhammer-logo.png`}></img>
            </div>
            <div>
                text goes here
            </div>
        </div>
    );
};