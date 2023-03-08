import React, { useEffect, useState } from "react";
import Area from "./area";
import { v4 as uuidv4 } from "uuid";
import { fetchPaints } from "../api";

export default function AreaList({schemeAreas, toggleSidebar}) {

    const [paintsList, setPaints] = useState([])
    useEffect(() => {
        const getPaints = async () => {
            const paints = await fetchPaints();
  
          setPaints(paints);
        }
        
        getPaints();
    },[])

    return(
        <div className="area-list">
            {
                schemeAreas.map((area) => {
                    return <Area key={uuidv4()} area={area} paints={paintsList} toggleSidebar={toggleSidebar}></Area>
                })
            }
        </div>
    );
}