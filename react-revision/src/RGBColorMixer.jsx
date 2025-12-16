import React, { useState } from "react";

const RGBColorMixer = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  //rgb('+red+','+green+','+blue+')

  return (
    <div>
      <h1>RGB Color Mixer in React Js</h1>
      <div
        style={{
          height: "200px",
          width: "200px",
          margin: "20px",
          background: "rgb(" + red + "," + green + "," + blue + ")",
          borderRadius:'50%'
        }}
      ></div>

      <label htmlFor="red">Red</label>
      <input
        type="range"
        onChange={(e) => setRed(e.target.value)}
        min={0}
        max={255}
        value={red}
      />
      <br />
      <label htmlFor="green">Green</label>
      <input
        type="range"
        onChange={(e) => setGreen(e.target.value)}
        min={0}
        max={255}
        value={green}
      />
      <br />
      <label htmlFor="blue">Blue</label>
      <input
        type="range"
        onChange={(e) => setBlue(e.target.value)}
        min={0}
        max={255}
        value={blue}
      />
      <br />
    </div>
  );
};

export default RGBColorMixer;
