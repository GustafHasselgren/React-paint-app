import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom"
import AreaList from "../areaList";
import { fetchScheme } from "../../api";


export default function SchemeAreas() {
    
    const {schemeId} = useParams();
    const [areaList, setAreas] = useState([]);
    useEffect(() => {
        const getScheme = async () => {
            const scheme = await fetchScheme(schemeId)
  
          setAreas(scheme.areas);
        }
        getScheme();
        },[])


    return (
        <AreaList schemeAreas={areaList}></AreaList>
    );
}