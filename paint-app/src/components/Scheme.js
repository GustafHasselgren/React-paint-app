import React from "react";

export default function Scheme({id}) {


    return (
        <div className="scheme" onClick={() => {/*Callback till nästa route med ID i URL*/}}>
            <div>
                <img className="scheme-img" src={`${process.env.PUBLIC_URL}/assets/images/Warhammer-logo.png`}></img>
            </div>
            <div className="scheme-text">
                text goes here
            </div>
        </div>
    );
};