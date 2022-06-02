import './App.css';
import Welcome from './components/Welcome/Welcome';
import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';


import { useState } from 'react';

function App() {

  let [showAside, setShowAside] = useState(false);

  function burgerMenuClick() {
    setShowAside(oldState => {
      return !oldState
    });
  }

  return (
    <div className="App">
      <Aside showAside={showAside}></Aside>
      <Header burgerMenuClick={burgerMenuClick} ></Header>
      <Welcome></Welcome>
    </div>
  );
}

export default App;
