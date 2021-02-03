import React, { useState } from 'react';
import './App.css';
import Game from './Components/Game';
import About from './Components/About';

function App() {
  const [characterArray, setCharacter] = useState([
    {
      id: 'Aerith',
      src: '',
      clicked: false,
    },
    {
      id: 'Barret',
      src: '',
      clicked: false,
    },
    {
      id: 'Biggs',
      src: '',
      clicked: false,
    },
    {
      id: 'Bugenhagen',
      src: '',
      clicked: false,
    },
    {
      id: 'Cait Sith',
      src: '',
      clicked: false,
    },
    {
      id: 'Cid',
      src: '',
      clicked: false,
    },
    {
      id: 'Cloud',
      src: '',
      clicked: false,
    },
    {
      id: 'Dio',
      src: '',
      clicked: false,
    },
    {
      id: 'Don Corneo',
      src: '',
      clicked: false,
    },
    {
      id: 'Dyne',
      src: '',
      clicked: false,
    },
    {
      id: 'Jenova',
      src: '',
      clicked: false,
    },
    {
      id: 'Jessie',
      src: '',
      clicked: false,
    },
    {
      id: 'Hojo',
      src: '',
      clicked: false,
    },
    {
      id: 'Red XIII',
      src: '',
      clicked: false,
    },
    {
      id: 'Reeve',
      src: '',
      clicked: false,
    },
    {
      id: 'Reno',
      src: '',
      clicked: false,
    },
    {
      id: 'Rude',
      src: '',
      clicked: false,
    },
    {
      id: 'Rufus',
      src: '',
      clicked: false,
    },
    {
      id: 'Sephiroth',
      src: '',
      clicked: false,
    },
    {
      id: 'Tifa',
      src: '',
      clicked: false,
    },
    {
      id: 'Tseng',
      src: '',
      clicked: false,
    },
    {
      id: 'Vincent',
      src: '',
      clicked: false,
    },
    {
      id: 'Wedge',
      src: '',
      clicked: false,
    },
    {
      id: 'Yuffie',
      src: '',
      clicked: false,
    },
  ]);

  const [componentToRender, setComponent] = useState(true);

  const ChangeComponent = (props) => {
    if (!!props.component) {
      return <Game />;
    } else if (!props.component) {
      return <About />;
    }
  };

  const changeComponent = () => {
    if (!!componentToRender) {
      setComponent(false);
    } else {
      setComponent(true);
    }
  };

  return (
    <div className="App">
      <div className="header">
        <h1 className="sectionTitle" onClick={changeComponent}>
          Home
        </h1>
        <h1 className="sectionTitle" onClick={changeComponent}>
          About
        </h1>
      </div>
      <ChangeComponent component={componentToRender} />
    </div>
  );
}

export default App;
