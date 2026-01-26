import { useState } from "react";
import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color.jsx";
import "./App.css";

import ColorForm from "./Components/ColorForm/ColorForm.jsx";

function App() {
  //Farben abspeichern damit später neue Farben hinzufügen.
  const [colors, setColors] = useState(initialColors);

  return (
    <>
      <h1>Theme Creator</h1>

      <ColorForm onSubmitColor={(data) => console.log(data)} />

      {colors.map((color) => (
        <Color key={color.id} color={color} />
      ))}
    </>
  );
}

export default App;
