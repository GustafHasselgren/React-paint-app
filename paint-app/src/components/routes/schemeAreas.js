import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import AreaList from "../areaList";
import Sidebar from "../sidebar";
import { fetchScheme, insertStep } from "../../api";



export default function SchemeAreas() {
    const [showSidebar, setSidebar] = useState(false);
    const {schemeId} = useParams();
    const [areaList, setAreas] = useState([]);
    const [sidebarAreaName, setSidebarAreaName] = useState('');
    useEffect(() => {
        const getScheme = async () => {
            const scheme = await fetchScheme(schemeId);
  
          setAreas(scheme.areas);
        }
        
        getScheme();
        },[])
    
    function toggleSidebar(areaName) {
        setSidebarAreaName(areaName);
        setSidebar(!showSidebar);
    };

    async function addStep(areaName, paint, type, method) {
        const scheme = await insertStep(schemeId, areaName, paint, type, method);

        setAreas(scheme.areas);
    }

    return (
        <div>
            
            <AreaList schemeAreas={areaList} toggleSidebar={toggleSidebar}></AreaList>
            {showSidebar && <Sidebar areaName={sidebarAreaName} toggleSidebar={toggleSidebar} addStep={addStep}></Sidebar>
                
            
            }
        </div>
    );
}