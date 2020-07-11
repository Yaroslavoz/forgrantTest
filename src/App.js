import React from 'react';
import './styles/main.css';
import './styles/style.css';
import Card from './components/cardcomponent'
import { SourceProvider } from './SourceContext'



function App() {
  return (
    <>
      <h1 className='text-white'>This is a great React app</h1>
      <div className=" container w-3/4 mx-auto grid  grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      <SourceProvider>
        
          <Card />
         
      </SourceProvider>
      </div>
    </>
  );
}

export default App;
