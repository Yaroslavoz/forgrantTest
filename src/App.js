import React from 'react';
import './styles/main.css';
import './styles/style.css';
import Card from './components/cardcomponent'
import { SourceProvider } from './SourceContext'



function App() {
  return (
    <>
      <h1 className='text-white'>This is a great React app</h1>
      <SourceProvider>
        
          <Card />
         
      </SourceProvider>
    </>
  );
}

export default App;
