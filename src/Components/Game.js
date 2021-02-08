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
      index: '',
    },
    {
      id: 'Alrund, God of the Cosmos',
      src: alrund,
      revealed: false,
      index: '',
    },
    {
      id: 'Arni Brokenbow',
      src: arni,
      revealed: false,
      index: '',
    },
    {
      id: 'Birgi, God of Storytelling',
      src: birgi,
      revealed: false,
      index: '',
    },
    {
      id: 'Cosima, God of the Voyage',
      src: cosima,
      revealed: false,
      index: '',
    },
    {
      id: 'Egon, God of Death',
      src: egon,
      revealed: false,
      index: '',
    },
    {
      id: 'Esika, God of the Tree',
      src: esika,
      revealed: false,
      index: '',
    },
    {
      id: 'Firja, Judge of Valor',
      src: firja,
      revealed: false,
      index: '',
    },
    {
      id: 'Fynn, the Fangbearer',
      src: fynn,
      revealed: false,
      index: '',
    },
    {
      id: 'Halvar, God of Battle',
      src: halvar,
      revealed: false,
      index: '',
    },
    {
      id: 'Harald, King of Skemfar',
      src: harald,
      revealed: false,
      index: '',
    },
    {
      id: 'Inga Rune-Eyes',
      src: inga,
      revealed: false,
      index: '',
    },
    {
      id: 'Jorn, God of Winter',
      src: jorn,
      revealed: false,
      index: '',
    },
    {
      id: 'Kardur, Doomscourge',
      src: kardur,
      revealed: false,
      index: '',
    },
    {
      id: 'Kaya the Inexorable',
      src: kaya,
      revealed: false,
      index: '',
    },
    {
      id: 'Koll, the Forgemaster',
      src: koll,
      revealed: false,
      index: '',
    },
    {
      id: 'Kolvori, God of Kinship',
      src: kolvori,
      revealed: false,
      index: '',
    },
    {
      id: 'Koma, Cosmos Serpent',
      src: koma,
      revealed: false,
      index: '',
    },
    {
      id: 'Magda, Brazen Outlaw',
      src: magda,
      revealed: false,
      index: '',
    },
    {
      id: 'Maja, Bretagard Protector',
      src: maja,
      revealed: false,
      index: '',
    },
    {
      id: 'Moritte of the Frost',
      src: moritte,
      revealed: false,
      index: '',
    },
    {
      id: 'Narfi, Betrayer King',
      src: narfi,
      revealed: false,
      index: '',
    },
    {
      id: 'Niko Aris',
      src: niko,
      revealed: false,
      index: '',
    },
    {
      id: 'Orvar, the All-Form',
      src: orvar,
      revealed: false,
      index: '',
    },
    {
      id: 'Reidane, God of the Worthy',
      src: reidane,
      revealed: false,
      index: '',
    },
    {
      id: 'Sarulf, Realm Eater',
      src: sarulf,
      revealed: false,
      index: '',
    },
    {
      id: 'Sigrid, God-Favored',
      src: sigrid,
      revealed: false,
      index: '',
    },
    {
      id: 'Svella, Ice Shaper',
      src: svella,
      revealed: false,
      index: '',
    },
    {
      id: 'Tergrid, God of Fright',
      src: tergrid,
      revealed: false,
      index: '',
    },
    {
      id: 'Toralf, God of Fury',
      src: toralf,
      revealed: false,
      index: '',
    },
    {
      id: 'Tyvar Kell',
      src: tyvar,
      revealed: false,
      index: '',
    },
    {
      id: 'Valki, God of Lies',
      src: valki,
      revealed: false,
      index: '',
    },
    {
      id: 'Varragoth, Bloodsky Sire',
      src: varragoth,
      revealed: false,
      index: '',
    },
    {
      id: 'Vega, the Watcher',
      src: vega,
      revealed: false,
      index: '',
    },
    {
      id: 'Vorinclex, Monstrous Raider',
      src: vorinclex,
      revealed: false,
      index: '',
    },
  ]);

  // Elegimos 10 cartas de la "base de datos"
  const [chosenCards, setChosenCards] = useState(
    _.sampleSize(characterArray, 10),
  );

  // Inicializamos un array donde guardamos las cartas a las que hacemos clicks en parejas
  const [lastPickedCard, setPickedCard] = useState([]);

  //Controla el estado de las cartas tras hacer click en ellas
  const handleClickOnCard = (e) => {
    chosenCards.map((card, index) => {
      // Comprobamos si la carta ya ha sido clickada o emparejada y salimos si asi es
      if (card.revealed === true) {
        return card;
      }
      // Comprobamos si la carta clickada coincide con alguna del array y si es asi le cambiamos la property revealed
      else if (card.index.toString() === e.target.attributes[1].value) {
        const newCharacterArray = [...chosenCards];
        newCharacterArray[index].revealed = true;
        setChosenCards(newCharacterArray);
        // Si la carta no es la primera del array la metemos en el array
        setPickedCard([...lastPickedCard, card]);
      }
      return card;
    });
  };

  useEffect(() => {
    if (!lastPickedCard[0] || (!!lastPickedCard[0] && !lastPickedCard[1])) {
      // Si aun no tenemos ambas cartas en el array volvemos
      return;
    } else if (
      !!lastPickedCard[0] &&
      !!lastPickedCard[1] &&
      lastPickedCard[0].id === lastPickedCard[1].id
    ) {
      // Si ambas cartas escogidas son la misma el score sube y reseteamos el array de cartas escogidas
      console.log('Yay!');
      setPickedCard([]);
    } else if (lastPickedCard[0].id !== lastPickedCard[1].id) {
      // Si ambas cartas escogidas no coinciden cambiamos su estado, restamos un error y reseteamos el array de cartas escodigas
      chosenCards.map((card, index) => {
        if (
          card.id === lastPickedCard[0].id ||
          card.id === lastPickedCard[1].id
        ) {
          const newCharacterArray = [...chosenCards];
          setTimeout(() => {
            newCharacterArray[index].revealed = false;
          }, 100);
          setChosenCards(newCharacterArray);
        }
      });
      // El jugador tiene 1 error mas
      console.log('You choose.... WRONG!');
      setPickedCard([]);
    }
  }, [lastPickedCard]);

  // Cuando carga por primera vez "creamos" el mazo de cartas del juego, duplicamos las 10 elegidas al inicio, las randomizamos y le damos a cada carta su index.
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

  return (
    <div className="game">
      {chosenCards.map((card, index) => {
        if (card.revealed === false) {
          return (
            <div className="flipCard" key={index}>
              <div className="flipCardInner">
                <div className="flipCardFront">
                  <img
                    alt={card.id}
                    value={index}
                    src={cardBack}
                    className="card"
                    onClick={handleClickOnCard}
                  />
                </div>
                <div className="flipCardBack">
                  <img
                    alt={card.id}
                    value={index}
                    src={card.src}
                    className="card"
                    onClick={handleClickOnCard}
                  />
                </div>
              </div>
            </div>
          );
        } else if (card.revealed === true) {
          return (
            <div className="flipCard" key={index}>
              <div className="flipCardInner flippedCard">
                <div className="flipCardFront">
                  <img
                    alt={card.id}
                    value={index}
                    src={cardBack}
                    className="card"
                    onClick={handleClickOnCard}
                  />
                </div>
                <div className="flipCardBack">
                  <img
                    alt={card.id}
                    value={index}
                    src={card.src}
                    className="card"
                    onClick={handleClickOnCard}
                  />
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default Game;
