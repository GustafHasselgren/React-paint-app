import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Area({data}) {

    const [dropdown, setDropdown] = useState(false);
    const toggleDropdown = () => {setDropdown(!dropdown)};

    return (
        <div className='area' onClick={toggleDropdown}>
            <p className="area-text">{data.area}</p>
            {dropdown && <div  className='area-dropdown'>
                <div>
                    <span>Paint</span>
                    <span>Method</span>
                </div>
                {data.steps.map((step) => {
                    return (
                        <div key={uuidv4()}>
                            
                            <span>{step.paint}</span>
                            <span>{step.method}</span>
                        </div>
                )})}
            </div>
            }
        </div>
    );
}