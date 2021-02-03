import React, { useState } from 'react';
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
        Four cards will appear on screen you will have to click one you haven't
        done so previously. <br />
        The goal is to score as high as possible.
        <br />
        Your score will reset once you have clicked the same image twice. Try to
        get the maximum score! <br />
        (You will see a message once you get there)
      </p>
      <h2>Credits</h2>
      <p>
        The images belong to their owner, I don't claim any ownership over them.
      </p>
    </div>
  );
}

export default About;
