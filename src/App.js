import React, { useState } from 'react';
import './App.css';
import Game from './Components/Game';
import About from './Components/About';

function App() {
  const [componentToRender, setComponent] = useState(true);

  const ChangeComponent = (props) => {
    if (!!props.component) {
      return <Game />;
    } else if (!props.component) {
      return <About />;
    }
  };

  const changeComponent = (e) => {
    if (e.target.id === 'about') {
      setComponent(false);
    } else if (e.target.id === 'home') {
      setComponent(true);
    }
  };

  return (
    <div className="App">
      <div className="header">
        <h1 id="home" className="sectionTitle" onClick={changeComponent}>
          Home
        </h1>
        <h1 id="about" className="sectionTitle" onClick={changeComponent}>
          About
        </h1>
      </div>
      <ChangeComponent component={componentToRender} />
    </div>
  );
}

export default App;
