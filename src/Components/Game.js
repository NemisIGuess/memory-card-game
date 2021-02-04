import React, { useState } from 'react';

function Game() {
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

  const changeStatus = () => {
    console.log(characterArray[15]);
    characterArray[15].cliked
      ? setCharacter(...characterArray, (characterArray[15].clicked = false))
      : setCharacter(...characterArray, (characterArray[15].clicked = true));
    console.log(characterArray[15]);
    console.log(characterArray);
  };

  return (
    <div className="App">
      <h1>Hola</h1>
      <button onClick={changeStatus}>Hola</button>
    </div>
  );
}

export default Game;
