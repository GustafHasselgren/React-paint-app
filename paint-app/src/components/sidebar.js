import React from "react";
import { useState } from "react";
import { insertStep } from "../api";

export default function Sidebar({areaName, toggleSidebar, addStep}) {

    const [paint, setPaint] = useState('');
    const [type, setType] = useState('');
    const [method, setMethod] = useState('');

    function handleSubmit  (event) {
        event.preventDefault();
        addStep(areaName, paint, type, method);
    }

    return (
        <div className="area-sidebar">
            <h3 className="area-sidebar-headline">{areaName}</h3>
            <div className="sidebar-form-container">
                <form onSubmit={handleSubmit}>
                    <label>
                        Paint:
                    </label>
                    <input
                        type='text' 
                        value={paint} 
                        onChange={(e) => setPaint(e.target.value)}/>
                    <label>
                        Type:
                    </label>
                    <input
                        type='text' 
                        value={type} 
                        onChange={(e) => setType(e.target.value)}/>
                    <label>
                        Method:
                    </label>
                    <input
                        type='text' 
                        value={method} 
                        onChange={(e) => setMethod(e.target.value)}/>
                    <input type='submit' className="submit-button"/>
                </form>
            </div>
            <button onClick={toggleSidebar}>Close</button>
        </div>
    )
}