import React, { useState } from 'react';
import './App.css';

// import components
import Parent from './components/Parent';

// import context 
import CounterContext from './Global/CounterContext';

export default function App() {
  let Count = useState(' Muhammad ')
  return (
    <CounterContext.Provider value={Count}>
      <Parent />
    </CounterContext.Provider>

  );
}


