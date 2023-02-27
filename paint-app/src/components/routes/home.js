import SchemesList from "../SchemesList";
import { useState } from "react";
import Scheme from "../Scheme";
import { v4 as uuidv4 } from "uuid";

var schemes = [uuidv4(), uuidv4()]


export default function Home () {
    const [schemesList, setSchemesList] = useState(schemes)

    function addScheme(scheme) {
    setSchemesList((schemesList) => {
      return [...schemesList, scheme];
    });
  };
    return(
        <SchemesList schemesList = {schemesList}></SchemesList>
    );
}
