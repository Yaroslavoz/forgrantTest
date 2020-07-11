import React from "react";
//import { SourceContext } from '../SourceContext'

const Coin = (props) => {
    //console.log("Image props ", props);
    // const source = useContext(SourceContext)
    // console.log(source);
    
    return (
       <img src={props.src} alt={props.alt} /> 
    )
}
//source[0].src
export default Coin