import { useState } from "react";
import { nanoid } from "nanoid";
import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color.jsx";
import "./App.css";

import ColorForm from "./Components/ColorForm/ColorForm.jsx";

function App() {
  //Farben abspeichern damit später neue Farben hinzufügen.
  const [colors, setColors] = useState(initialColors);
  function handleAddColor(data) {
    const newColor = {
      id: nanoid(),
      role: data.role,
      hex: data.hex,
      contrastText: data.contrastText,
    };
    setColors((prevColors) => [newColor, ...prevColors]);
  }

  return (
    <>
      <h1>Theme Creator</h1>

      <ColorForm onSubmitColor={handleAddColor} />

      {colors.map((color) => (
        <Color key={color.id} color={color} />
      ))}
    </>
  );
}

export default App;
