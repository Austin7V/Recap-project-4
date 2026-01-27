import { useState } from "react";
import { nanoid } from "nanoid";
import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color.jsx";
import "./App.css";

import ColorForm from "./Components/ColorForm/ColorForm.jsx";

function App() {
  const [colors, setColors] = useState(initialColors);
  const [colorIdToDelete, setColorIdToDelete] = useState(null);

  function handleAddColor(data) {
    const newColor = {
      id: nanoid(),
      role: data.role,
      hex: data.hex,
      contrastText: data.contrastText,
    };
    setColors((prevColors) => [newColor, ...prevColors]);
  }

  function handleDeleteColor(idToDelete) {
    setColors((prevColors) =>
      prevColors.filter((color) => color.id !== idToDelete),
    );
  }

  return (
    <>
      <h1>Theme Creator</h1>

      <ColorForm onSubmitColor={handleAddColor} />
      {colors.length === 0 && <p>No colors... Add a new color!</p>}
      {colors.map((color) => (
        <Color
          key={color.id}
          color={color}
          onDeleteColor={() => setColorIdToDelete(color.id)}
          isConfirming={colorIdToDelete === color.id}
          onConfirmDelete={() => handleDeleteColor(color.id)}
          onCancelDelete={() => setColorIdToDelete(null)}
        />
      ))}
    </>
  );
}

export default App;
