import React from "react";
import Scheme from "./Scheme";

export default function SchemesList({schemesList}) {
    
    return (
        <div className="scheme-list">
            {schemesList.map((scheme) => {
                return <Scheme key={scheme._id.$oid} id={scheme._id.$oid} name={scheme.name}></Scheme>
            })}
        </div>
    );

};