import React, { createContext } from 'react'

const SourceContext = createContext([])
  
const SourceProvider = (props) => {
  return (
    <SourceContext.Provider value={[
      {
        name: 'ETH',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR6HcrYyBTwwAEI1Oj_zYeOEbxZ1cp1BLBpyQ&usqp=CAU'
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




