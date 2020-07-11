import React, { createContext } from 'react'

const SourceContext = createContext([])
  
const SourceProvider = (props) => {
  return (
    <SourceContext.Provider value={[
      {
        name: 'ETH',
        src: 'https://www.crypto-news-flash.com/wp-content/uploads/2019/06/Inked-Pixels-2-Ethereum-1000x516.jpg'
      },
      {
        name: 'LTC',
        src: 'https://mining-cryptocurrency.ru/wp-content/uploads/Litecoin-comissions.jpg'
      },
      {
        name: 'BTC',
        src: 'https://pbs.twimg.com/media/ETWKT2eUYAAfnaD.jpg:large'
      }
    ]}>
      {props.children}
    </SourceContext.Provider>
  )
}

export {SourceContext, SourceProvider}




