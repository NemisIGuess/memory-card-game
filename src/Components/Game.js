import React, { useEffect, useState } from 'react';
import '../Style/Game.css';
import _ from 'lodash';
import alrund from '../Images/Alrund.png';
import birgi from '../Images/Birgi.png';
import cosima from '../Images/Cosima.png';
import egon from '../Images/Egon.png';
import esika from '../Images/Esika.png';
import halvar from '../Images/Halvar.png';
import jorn from '../Images/Jorn.png';
import kolvori from '../Images/Kolvori.png';
import reidane from '../Images/Reidane.png';
import sigrid from '../Images/Sigrid.png';
import tergrid from '../Images/Tergrid.png';
import toralf from '../Images/Toralf.png';
import valki from '../Images/Valki.png';

function Game() {
  const [characterArray, setCharacter] = useState([
    {
      id: 'Alrund, God of the Cosmos',
      src: alrund,
      clicked: false,
    },
    {
      id: 'Birgi, God of Storytelling',
      src: birgi,
      clicked: false,
    },
    {
      id: 'Cosima, God of the Voyage',
      src: cosima,
      clicked: false,
    },
    {
      id: 'Egon, God of Death',
      src: egon,
      clicked: false,
    },
    {
      id: 'Esika, God of the Tree',
      src: esika,
      clicked: false,
    },
    {
      id: 'Halvar, God of Battle',
      src: halvar,
      clicked: false,
    },
    {
      id: 'Jorn, God of Winter',
      src: jorn,
      clicked: false,
    },
    {
      id: 'Kolvori, God of Kinship',
      src: kolvori,
      clicked: false,
    },
    {
      id: 'Reidane, God of the Worthy',
      src: reidane,
      clicked: false,
    },
    {
      id: 'Sigrid, God-Favored',
      src: sigrid,
      clicked: false,
    },
    {
      id: 'Tergrid, God of Fright',
      src: tergrid,
      clicked: false,
    },
    {
      id: 'Toralf, God of Fury',
      src: toralf,
      clicked: false,
    },
    {
      id: 'Valki, God of Lies',
      src: valki,
      clicked: false,
    },
  ]);

  const [cardsToDisplay, setCardsToDisplay] = useState([]);

  const changeCardStatus = (e) => {
    console.log(e.target);
  };

  useEffect(() => {
    const randomCards = _.sampleSize(characterArray, 3);
    if (
      randomCards[0].clicked === false ||
      randomCards[1].clicked === false ||
      randomCards[2].clicked === false
    ) {
      setCardsToDisplay(randomCards);
      randomCards.map((card) => card.addEventListener);
    }
  }, [characterArray]);

  return (
    <div className="game">
      {cardsToDisplay.map((card) => {
        return (
          <img
            alt={card.id}
            key={card.id}
            src={card.src}
            className="card"
            onClick={changeCardStatus}
          />
        );
      })}
    </div>
  );
}

export default Game;
