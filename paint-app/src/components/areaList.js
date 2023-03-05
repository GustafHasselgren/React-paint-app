import React from "react";
import Area from "./area";
import { v4 as uuidv4 } from "uuid";

export default function AreaList({schemeAreas}) {

    return(
        <div className="area-list">
            {
                schemeAreas.map((area) => {
                    return <Area key={uuidv4()} area={area}></Area>
                })
            }
        </div>
    );
}