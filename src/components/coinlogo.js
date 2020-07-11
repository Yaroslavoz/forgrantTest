import React, { useContext } from "react";
import { SourceContext } from '../SourceContext'

const Coin = (props) => {
    //console.log("Image props ", props);
    const source = useContext(SourceContext)
    console.log(source);
    
    return (
       <img src={source[0].src} alt={source[0].name} /> 
    )
}
//source[0].src
export default Coin