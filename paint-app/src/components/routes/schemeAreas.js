import { useState } from "react";
import { useLocation } from "react-router-dom"
import AreaList from "../areaList";

var testAreas = [{area: 'Weapons', 
                steps: 
                    [{paint: 'red', method: 'base layer'}, 
                    {paint: 'red', method: 'base layer'}, 
                    {paint: 'red', method: 'base layer'}]},
                {area: 'Armor', 
                steps: 
                    [{paint: 'red', method: 'base layer'}, 
                    {paint: 'red', method: 'base layer'}, 
                    {paint: 'red', method: 'base layer'}]},
                {area: 'Clothes', 
                steps: 
                    [{paint: 'red', method: 'base layer'}, 
                    {paint: 'red', method: 'base layer'}, 
                    {paint: 'red', method: 'base layer'}]},
                ];

export default function SchemeAreas() {
    const location = useLocation();
    const {schemeId} = location.state;
    const [areaList, setAreas] = useState(testAreas)


    return (
        <AreaList schemeAreas={areaList}></AreaList>
    );
}