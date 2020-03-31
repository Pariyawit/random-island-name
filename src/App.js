import React from 'react';
import './App.scss';
import Header from './components/Header';
import NameGenerator from './components/NameGenerator';
import GeneralGuide from './components/GeneralGuide';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <NameGenerator></NameGenerator>
      <GeneralGuide></GeneralGuide>
    </div>
  );
}

export default App;
