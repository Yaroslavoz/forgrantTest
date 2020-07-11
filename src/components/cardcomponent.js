import React from 'react';
//import { w3cwebsocket as W3CWebSocket } from 'websocket'
import Coin from './coinlogo'

const Card = (props) => {
//  const [etherstate, setEther ] =useState()
//  const [litestate, setLite ] =useState()
//  const [bitstate, setBit ] =useState()

  

 
    return (
        <div className="flex flex-wrap h-auto bg-indigo-700  content-between hover:bg-indigo-800 m-2 sm:mx-auto md:m-2 lg:m-2 xl:m-2 rounded overflow-hidden shadow-2xl transition ease-in-out duration-700 transform hover:-translate-y-1 hover:scale-110  justify-center py-auto">
          <div className="py-auto"> 
             <Coin className='w-full'/>
              
                
              <div className="font-bold text-xl mb-2 p-2">
                Title
              </div>
                          
              <div className='px-2 py-2 mb-0'>
                <p className='p-2'>Vote average: <strong>Data</strong></p>
              </div>
          </div>
        </div>
      
    );
  }


export default Card;