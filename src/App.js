import './App.css';
import Welcome from './components/Welcome/Welcome';
import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import { BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase';

const app = initializeApp(firebaseConfig);

function App() {

  let [showAside, setShowAside] = useState(false);

  function burgerMenuClick() {
    setShowAside(oldState => {
      return !oldState
    });
  }

  return (
    <Router>
      <div className="App">
        <div className="InnerWrapper">
          <Aside showAside={showAside}></Aside>
          <Header burgerMenuClick={burgerMenuClick} ></Header>
          <Welcome></Welcome>
          <About></About>
          <Skills></Skills>
          <Projects></Projects>
          <Contact></Contact>
          <Footer></Footer>
        </div>
      </div>
    </Router>
  );
}

export default App;
