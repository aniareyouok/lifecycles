import React, { useState } from 'react';
import NameItem from './components/NameItem';
import './App.css';

function App() {

    const [activeName, setActiveName] = useState('');
    
  return (
    <>
      <h1>Het laatste rondje is gegeven door: {activeName}</h1>
      <ul>
        <NameItem
            name="Henk"
            value={activeName}
            onClick={setActiveName}
        />
        <NameItem name="Piet" />
        <NameItem name="Jan" />
      </ul>
    </>
  );
}

export default App;
