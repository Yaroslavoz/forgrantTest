import React, { createContext } from 'react'

const SourceContext = createContext([])
  
const SourceProvider = (props) => {
  return (
    <SourceContext.Provider value={[
      {
        name: 'ETH',
        src: '../images/ethereum@1x.png'
      },
      {
        name: 'LTC',
        src: './images/litecoin@1x.png'
      },
      {
        name: 'BTC',
        src: './images/bitcoin@1x.png'
      }
    ]}>
      {props.children}
    </SourceContext.Provider>
  )
}

export {SourceContext, SourceProvider}




