import React, { useEffect, useState } from 'react';
import '../Style/Game.css';
import _ from 'lodash';
import aegar from '../Images/Aegar.png';
import alrund from '../Images/Alrund.png';
import arni from '../Images/Arni.png';
import birgi from '../Images/Birgi.png';
import cosima from '../Images/Cosima.png';
import egon from '../Images/Egon.png';
import esika from '../Images/Esika.png';
import firja from '../Images/Firja.png';
import fynn from '../Images/Fynn.png';
import halvar from '../Images/Halvar.png';
import harald from '../Images/Harald.png';
import inga from '../Images/Inga.png';
import jorn from '../Images/Jorn.png';
import kardur from '../Images/Kardur.png';
import kaya from '../Images/Kaya.png';
import koll from '../Images/Koll.png';
import kolvori from '../Images/Kolvori.png';
import koma from '../Images/Koma.png';
import magda from '../Images/Magda.png';
import maja from '../Images/Maja.png';
import moritte from '../Images/Moritte.png';
import narfi from '../Images/Narfi.png';
import niko from '../Images/Niko.png';
import orvar from '../Images/Orvar.png';
import reidane from '../Images/Reidane.png';
import sarulf from '../Images/Sarulf.png';
import sigrid from '../Images/Sigrid.png';
import svella from '../Images/Svella.png';
import tergrid from '../Images/Tergrid.png';
import toralf from '../Images/Toralf.png';
import tyvar from '../Images/Tyvar.png';
import valki from '../Images/Valki.png';
import varragoth from '../Images/Varragoth.png';
import vega from '../Images/Vega.png';
import vorinclex from '../Images/Vorinclex.png';
import cardBack from '../Images/CardBack.png';

function Game() {
  const [characterArray, setCharacter] = useState([
    {
      id: 'Aegar, the Freezing Flame',
      src: aegar,
      revealed: false,
      paired: false,
      index: '',
    },
    {
      id: 'Alrund, God of the Cosmos',
      src: alrund,
      revealed: false,
      paired: false,
      index: '',
    },
    {
      id: 'Arni Brokenbow',
      src: arni,
      revealed: false,
      paired: false,
      index: '',
    },
    {
      id: 'Birgi, God of Storytelling',
      src: birgi,
      revealed: false,
      paired: false,
      index: '',
    },
    {
      id: 'Cosima, God of the Voyage',
      src: cosima,
      revealed: false,
      paired: false,
      index: '',
    },
    {
      id: 'Egon, God of Death',
      src: egon,
      revealed: false,
      paired: false,
      index: '',
    },
    {
      id: 'Esika, God of the Tree',
      src: esika,
      revealed: false,
      paired: false,
      index: '',
    },
    {
      id: 'Firja, Judge of Valor',
      src: firja,
      revealed: false,
      paired: false,
      index: '',
    },
    {
      id: 'Fynn, the Fangbearer',
      src: fynn,
      revealed: false,
      paired: false,
      index: '',
    },
    {
      id: 'Halvar, God of Battle',
      src: halvar,
      revealed: false,
      paired: false,
      index: '',
    },
    {
      id: 'Harald, King of Skemfar',
      src: harald,
      revealed: false,
      paired: false,
      index: '',
    },
    {
      id: 'Inga Rune-Eyes',
      src: inga,
      revealed: false,
      paired: false,
      index: '',
    },
    {
      id: 'Jorn, God of Winter',
      src: jorn,
      revealed: false,
      paired: false,
      index: '',
    },
    {
      id: 'Kardur, Doomscourge',
      src: kardur,
      revealed: false,
      paired: false,
      index: '',
    },
    {
      id: 'Kaya the Inexorable',
      src: kaya,
      revealed: false,
      paired: false,
      index: '',
    },
    {
      id: 'Koll, the Forgemaster',
      src: koll,
      revealed: false,
      paired: false,
      index: '',
    },
    {
      id: 'Kolvori, God of Kinship',
      src: kolvori,
      revealed: false,
      paired: false,
      index: '',
    },
    {
      id: 'Koma, Cosmos Serpent',
      src: koma,
      revealed: false,
      paired: false,
      index: '',
    },
    {
      id: 'Magda, Brazen Outlaw',
      src: magda,
      revealed: false,
      paired: false,
      index: '',
    },
    {
      id: 'Maja, Bretagard Protector',
      src: maja,
      revealed: false,
      paired: false,
      index: '',
    },
    {
      id: 'Moritte of the Frost',
      src: moritte,
      revealed: false,
      paired: false,
      index: '',
    },
    {
      id: 'Narfi, Betrayer King',
      src: narfi,
      revealed: false,
      paired: false,
      index: '',
    },
    {
      id: 'Niko Aris',
      src: niko,
      revealed: false,
      paired: false,
      index: '',
    },
    {
      id: 'Orvar, the All-Form',
      src: orvar,
      revealed: false,
      paired: false,
      index: '',
    },
    {
      id: 'Reidane, God of the Worthy',
      src: reidane,
      revealed: false,
      paired: false,
      index: '',
    },
    {
      id: 'Sarulf, Realm Eater',
      src: sarulf,
      revealed: false,
      paired: false,
      index: '',
    },
    {
      id: 'Sigrid, God-Favored',
      src: sigrid,
      revealed: false,
      paired: false,
      index: '',
    },
    {
      id: 'Svella, Ice Shaper',
      src: svella,
      revealed: false,
      paired: false,
      index: '',
    },
    {
      id: 'Tergrid, God of Fright',
      src: tergrid,
      revealed: false,
      paired: false,
      index: '',
    },
    {
      id: 'Toralf, God of Fury',
      src: toralf,
      revealed: false,
      paired: false,
      index: '',
    },
    {
      id: 'Tyvar Kell',
      src: tyvar,
      revealed: false,
      paired: false,
      index: '',
    },
    {
      id: 'Valki, God of Lies',
      src: valki,
      revealed: false,
      paired: false,
      index: '',
    },
    {
      id: 'Varragoth, Bloodsky Sire',
      src: varragoth,
      revealed: false,
      paired: false,
      index: '',
    },
    {
      id: 'Vega, the Watcher',
      src: vega,
      revealed: false,
      paired: false,
      index: '',
    },
    {
      id: 'Vorinclex, Monstrous Raider',
      src: vorinclex,
      revealed: false,
      paired: false,
      index: '',
    },
  ]);

  const [chosenCards, setChosenCards] = useState(
    _.sampleSize(characterArray, 10),
  );

  const [lastPickedCard, setPickedCard] = useState([]);

  const changeCardStatus = (e) => {
    chosenCards.map((card, index) => {
      if (card.revealed === true && !!lastPickedCard) {
        return;
      } else if (card.index.toString() === e.target.attributes[1].value) {
        const newCharacterArray = [...chosenCards];
        newCharacterArray[index].revealed = true;
        setChosenCards(newCharacterArray);
        if (lastPickedCard[0] !== card) {
          setPickedCard([...lastPickedCard, card]);
        }
        console.log(lastPickedCard);
      }
      return card;
    });
  };

  useEffect(() => {
    if (
      !!lastPickedCard[0] &&
      !!lastPickedCard[1] &&
      lastPickedCard[0].id === lastPickedCard[1].id
    ) {
      // Score goes up
      console.log('Yay!');
      setPickedCard([]);
    } else if (
      (!!lastPickedCard[0] && !lastPickedCard[1]) ||
      !lastPickedCard[0]
    ) {
      return;
    } else if (lastPickedCard[0].id !== lastPickedCard[1].id) {
      chosenCards.map((card, index) => {
        if (
          card.id === lastPickedCard[0].id ||
          card.id === lastPickedCard[1].id
        ) {
          const newCharacterArray = [...chosenCards];
          newCharacterArray[index].revealed = false;
          setChosenCards(newCharacterArray);
        }
      });
      setPickedCard([]);
    }
  }, [lastPickedCard]);

  useEffect(() => {
    const cardsToDuplicate = chosenCards;
    const duplicatedCards = _.cloneDeep(cardsToDuplicate);
    const shuffledArrays = _.shuffle([...cardsToDuplicate, ...duplicatedCards]);
    const indexedArray = shuffledArrays.map((card, index) => {
      card.index = index;
      return card;
    });
    setChosenCards(indexedArray);
  }, []);

  // Asi funcionaba el juego antes, al cambiar el modo de juego ya no vale.
  // useEffect(() => {
  // console.log(characterArray);
  // let randomCards = _.sampleSize(characterArray, 3);
  // // Comprueba si queda alguna carta sin seleccionar en el array padre y si es asi comprueba si todas las elegidas han sido seleccionadas, si lo han sido vuelve a elegir tres diferentes.
  // if (characterArray.some((card) => card.clicked === false)) {
  //   while (randomCards.every((card) => card.clicked === true)) {
  //     randomCards = _.sampleSize(characterArray, 3);
  //   }
  // } else if (characterArray.every((card) => card.clicked === true)) {
  //   setWinner([true]);
  // }
  // setCardsToDisplay(randomCards);
  // }, [chosenCards]);

  //Codigo del modo de juego anterior.
  // const [hasSomeoneWon, setWinner] = useState([false]);

  // useEffect(() => {
  //   if (hasSomeoneWon[0]) {
  //     alert('You Won!');
  //   }
  // }, [hasSomeoneWon]);

  return (
    <div className="game">
      {chosenCards.map((card, index) => {
        if (card.revealed === false) {
          return (
            <img
              alt={card.id}
              value={index}
              key={index}
              src={cardBack}
              className="card"
              onClick={changeCardStatus}
            />
          );
        } else if (card.revealed === true) {
          return (
            <img
              alt={card.id}
              value={index}
              key={index}
              src={card.src}
              className="card"
              onClick={changeCardStatus}
            />
          );
        }
      })}
    </div>
  );
}

export default Game;
