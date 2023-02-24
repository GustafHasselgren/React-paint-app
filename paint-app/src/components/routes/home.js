import SchemesList from "../SchemesList";
import { useState } from "react";
import Scheme from "../Scheme";


export default function Home () {
    const [schemesList, setSchemesList] = useState([Scheme, Scheme,])

    function addScheme(scheme) {
    setSchemesList((schemesList) => {
      return [...schemesList, scheme];
    });
  };
    return(
        <SchemesList schemesList = {schemesList}></SchemesList>
    );
}
