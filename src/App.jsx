import useLocalStorageState from "use-local-storage-state";
import { useState } from "react";
import { nanoid } from "nanoid";
import { initialColors } from "./lib/colors";
import { checkContrast } from "./lib/contrastChecker";
import Color from "./Components/Color/Color.jsx";
import "./App.css";

import ColorForm from "./Components/ColorForm/ColorForm.jsx";

function App() {
  const [colors, setColors] = useLocalStorageState("theme-colors", {
    defaultValue: initialColors,
  });
  const [colorIdToDelete, setColorIdToDelete] = useState(null);
  const [editingColorID, setEditingColorID] = useState(null);

  function handleAddColor(data) {
    const newColor = {
      id: nanoid(),
      role: data.role,
      hex: data.hex,
      contrastText: data.contrastText,
    };
    setColors((prevColors) => [newColor, ...prevColors]);

    checkContrast(data.hex, data.contrastText).then((contrastData) => {
      setColors((prevColors) =>
        prevColors.map((color) =>
          color.id === newColor.id
            ? { ...color, contrastCheck: contrastData }
            : color,
        ),
      );
    });
  }

  function handleDeleteColor(idToDelete) {
    setColors((prevColors) =>
      prevColors.filter((color) => color.id !== idToDelete),
    );
  }

  function handleClearAll() {
    setColors(initialColors);
  }
  function handleEditColor(idToEdit, data) {
    setColors((prevColors) =>
      prevColors.map((color) =>
        color.id === idToEdit ? { ...color, ...data } : color,
      ),
    );
    setEditingColorID(null);

    checkContrast(data.hex, data.contrastText).then((contrastData) => {
      setColors((prevColors) =>
        prevColors.map((color) =>
          color.id === idToEdit
            ? { ...color, contrastCheck: contrastData }
            : color,
        ),
      );
    });
  }
  return (
    <>
      <h1>Theme Creator</h1>
      <button onClick={handleClearAll} style={{ marginBottom: "20px" }}>
        Reset to Defaults
      </button>

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
          onStartEdit={() => setEditingColorID(color.id)}
          isEditing={editingColorID === color.id}
          onCancelEdit={() => setEditingColorID(null)}
          onSubmitEdit={handleEditColor}
        />
      ))}
    </>
  );
}

export default App;
