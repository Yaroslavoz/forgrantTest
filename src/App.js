import React, { useContext, useState, useEffect } from 'react';
import './styles/main.css';
import './styles/style.css';
import Card from './components/cardcomponent';
import { SourceContext } from './SourceContext'
import { w3cwebsocket as W3CWebSocket } from 'websocket'
import { Select } from "./components/Select";
const API_KEY = '171c9238ef2bce64183437c9cb3ceb2d071b864a419e584c083c37c58faa5d67'
const client = new W3CWebSocket(`wss://streamer.cryptocompare.com/v2?api_key=${API_KEY}`)



function App() {
  const source = useContext(SourceContext)
  const [sourceArray, setSource] = useState([])

  client.onerror = () => {
    console.log('Connection Error');
};

  client.onopen = () => {
    console.log('open')
    var subRequest = {
      "action": "SubAdd",
      "subs": ["5~CCCAGG~LTC~USD", "5~CCCAGG~BTC~USD", "5~CCCAGG~ETH~USD"]
  };
  client.send(JSON.stringify(subRequest));

  }
  useEffect(() => {
    client.onmessage = (e) => {
      console.log('message: ', JSON.parse(e.data))
      const { FROMSYMBOL, PRICE, LASTUPDATE, VOLUMEHOUR, LASTTRADEID } = JSON.parse(e.data)
      const newSource = source
      .map((it) => it.name === FROMSYMBOL 
      ? {
        ...it, 
        price: PRICE, 
        update_time: LASTUPDATE, 
        volume: VOLUMEHOUR,
        tradeId: LASTTRADEID
      } 
      : it )
      
      setSource([ 
          ...newSource
      ])
     
    }
  }, [source, sourceArray])
  
  console.log('updated array', sourceArray); 
  

  return (
    <>
      <Select />
      <div className=" container w-3/4 mx-auto grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      
      {sourceArray.map((it, index) =>
        <Card 
        key={index} 
        src={it.src} 
        alt={it.name} 
        title={it.name}
        price={it.price}
        />
      )}
      </div>
    </>
  );
}

export default App;
