import SchemesList from "../SchemesList";
import { useState, useEffect } from "react";
import { fetchSchemes } from "../../api";




export default function Home () {
    const [schemesList, setSchemesList] = useState([])
    useEffect(() => {
      const getSchemes = async () => {
        const schemes = await fetchSchemes()

        setSchemesList(schemes);
      }
      getSchemes();
      },[])



    function addScheme(scheme) {
    setSchemesList((schemesList) => {
      return [...schemesList, scheme];
    });
  };
    return(
        <SchemesList schemesList = {schemesList}></SchemesList>
    );
}
