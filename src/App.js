import React, { useContext, useState } from 'react';
import './styles/main.css';
import './styles/style.css';
import Card from './components/cardcomponent';
import { SourceContext } from './SourceContext'
import { w3cwebsocket as W3CWebSocket } from 'websocket'

const client = new W3CWebSocket('wss://min-api.cryptocompare.com/data/coin/generalinfo?fsyms=ETH,LTC,BTC&tsym=XMR')


function App() {
  const source = useContext(SourceContext)
  const [sourceArray, setSource] = useState(source)

  client.onerror = () => {
    console.log('Connection Error');
};

  client.onopen = () => {
    console.log('open');
  }
  client.onmessage = (e) => {
    console.log('message: ', JSON.parse(e.coins))
    setSource(JSON.parse(e.coins))
    
  }

  return (
    <>
      <h1 className='text-white'>This is a great React app</h1>
      <div className=" container w-3/4 mx-auto grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      {sourceArray.map((it, index) =>
        <Card key={index} src={it.src} alt={it.name} title={it.name}/>
      )}
      </div>
    </>
  );
}

export default App;
