import React from 'react';

const CURRENCYS_TO_SELECT = ['USD', 'EUR', 'GBP', 'RUB'];

const options = CURRENCYS_TO_SELECT.map(
  (curr, indx) => (
    <option key={Date.now() + indx} value={curr}>{curr}</option>
  )
);

const ws = new WebSocket('wss://ws.api.livecoin.net/ws/beta2');

ws.onopen = () => {
  console.log('Connection established!');

  ws.send("token", "BTC/USD", null);
}


ws.onclose = (event) => {
  console.log('Event: ', event);
  console.log('Connetion closed')
}

ws.onmessage = (event) => {
  console.log(event.data);
}

const Select = () => {
  return (<header className="flex my-0 mx-5 py-0 px-6" style={{ maxWidth: '982px' }}>
    <span className='my-0 mx-auto text-3xl text-white'>Select currency to exhange:</span>
    <div>
      <select name="" id="">
        {options}
      </select>
    </div>
  </header>);
};

export { Select };