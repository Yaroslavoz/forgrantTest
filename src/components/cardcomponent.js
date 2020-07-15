import React from 'react';
//import { w3cwebsocket as W3CWebSocket } from 'websocket'
//import { SourceContext } from '../SourceContext'
import Coin from './coinlogo'

const Card = (props) => {

//const source = useContext(SourceContext)
  

 
    return (
        <div className="flex flex-wrap h-auto bg-opacity-1  content-between hover:bg-indigo-800 m-2 sm:mx-auto md:m-2 lg:m-2 xl:m-2 rounded-lg overflow-hidden shadow-2xl transition ease-in-out duration-700 transform hover:-translate-y-1 hover:scale-110 py-0 text-white ">
          <div className="py-0 "> 
     
            <Coin className='w-full' src={props.src} alt={props.name}/>
            
              <div className="font-bold text-xl mb-2 p-2">
                {props.title}
              </div>

              <div>
                <h3>Price: <span>{props.price}</span></h3>
              </div>

              <div className='px-2 py-2 mb-0'>
                <p className='p-2'>Vote average: <strong>Data</strong></p>
              </div>
            </div>
          
        </div>
      
    );
  }


export default Card;