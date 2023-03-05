import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Area({area}) {

    const [isDown, setIsDown] = useState(false);
    const toggleDropdown = () => {setIsDown(!isDown)};

    return (
        <div className='area' onClick={toggleDropdown}>
            <p className="area-text">{area.name}</p>
            {isDown && <div  className='area-dropdown'>
                <div>
                    <span>Paint</span>
                    <span>Method</span>
                </div>
                {area.steps.map((step) => {
                    return (
                        <div key={uuidv4()}>
                            
                            {/*Visa rätt färg baserat på objectId 
                            Ny fetch? Göra samtidigt som arean?*/}
                            <span>{step.method}</span>
                        </div>
                )})}
            </div>
            }
        </div>
    );
}