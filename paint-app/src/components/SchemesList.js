import React from "react";
import Scheme from "./Scheme";
import { v4 as uuidv4 } from "uuid";

export default function SchemesList({schemesList}) {

    return (
        <div className="scheme-list">
            {schemesList.map((scheme) => {
                return <Scheme key={uuidv4()} id={uuidv4}/>
            })}
        </div>
    );

};