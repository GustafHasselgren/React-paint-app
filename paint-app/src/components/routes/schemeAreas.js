import { useState } from "react";
import { useLocation } from "react-router-dom"
import AreaList from "../areaList";

var testAreas = ['Weapons', 'Armor', 'Clothes']

export default function SchemeAreas() {
    const location = useLocation();
    const {schemeId} = location.state;
    const [areaList, setAreas] = useState(testAreas)


    return (
        <AreaList schemeAreas={areaList}></AreaList>
    );
}