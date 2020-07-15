import React from 'react';

const CURRENCYS_TO_SELECT = ['USD', 'EUR', 'GBP', 'RUB'];

const options = CURRENCYS_TO_SELECT.map(
  (curr, indx) => (
    <option key={Date.now() + indx} value={curr}>{curr}</option>
  )
);

// styles
const headerStyles = `
  container 
  w-3/4 
  mx-auto
  max-w-screen-lg 
  bg-header-bg 
  flex justify-between items-center
  min-h-header 
  my-0 mx-auto 
  py-0 px-6
  border border-header-border rounded-lg`


const Select = () => {
  return (
    <header
      className={headerStyles}>
      <span className='my-0 mx-auto text-3xl text-white'>Select currency to exhange:</span>
      <div className='select-wrapper'>
        <select name="" id="">
          {options}
        </select>
      </div>
    </header>
  );
};

export { Select };