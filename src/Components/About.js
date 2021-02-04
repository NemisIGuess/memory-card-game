import React from 'react';
import '../Style/About.css';

function About() {
  return (
    <div className="about">
      <h2>About</h2>
      <p>
        Project developed as part of The Odin Project JavaScript course. Done by
        Nemis.
      </p>
      <h2>How to play</h2>
      <p>
        20 cards will appear on screen face down. There are 10 different cards
        among them, two copies of each. Try to pair them by revealing them one
        by one.
      </p>
      <h2>Credits</h2>
      <p>
        The images belong to their owner, I don't claim any ownership over them.
      </p>
    </div>
  );
}

export default About;
