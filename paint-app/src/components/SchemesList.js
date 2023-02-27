import React from "react";
import Scheme from "./Scheme";
import { v4 as uuidv4 } from "uuid";

export default function SchemesList({schemesList}) {

    return (
        <div className="scheme-list">
            {schemesList.map((schemeId) => {
                return <Scheme key={uuidv4()} id={schemeId}></Scheme>
            })}
        </div>
    );

};