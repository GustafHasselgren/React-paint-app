import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Area({area, paints, toggleSidebar}) {

    const [isDown, setIsDown] = useState(false);
    const toggleDropdown = () => {setIsDown(!isDown)};


    return (
        <div className='area' onClick={toggleDropdown}>
            <p className="area-text">{area.name}</p>
            {isDown && <div  className='area-dropdown'>
                {/* Skapa tre kolumner via css */}
                <div>
                    <span>Paint</span>
                    <span>Type</span>
                    <span>Method</span>
                    <button onClick={() => toggleSidebar(area.name)}>+</button>
                </div>
                {area.steps.map((step) => {

                    let paintId = step.paint.$oid
                    let paint = paints.find(paint => paint._id.$oid === paintId);
                    return (
                        <div key={uuidv4()}>
                            
                            <span>{paint.name}</span>
                            <span>{paint.type}</span>
                            <span>{step.method}</span>
                        </div>
                )})}
            </div>
            }
        </div>
    );
}