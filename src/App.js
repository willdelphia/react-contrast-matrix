import "./App.css";
import { useState } from "react";
import ColorList from "./components/ColorList.js";

function App() {
  const [colors, setColors] = useState(["#000000", "#ffffff"]);

  function updateColor(index, color) {
    const newColors = [...colors];
    newColors[index] = color;
    setColors(newColors);
  }

  function deleteColor(index) {
    const newColors = [...colors];
    newColors.splice(index, 1);
    setColors(newColors);
  }

  function duplicateColor(index) {
    const newColors = [...colors];
    newColors.splice(index, 0, newColors[index]);
    setColors(newColors);
  }

  const colorModifiers = {
    updateColor,
    deleteColor,
    duplicateColor,
  };

  return (
    <>
      <header>
        <h1>Contrast Matrix</h1>
      </header>
      <ColorList colorModifiers={colorModifiers} colors={colors} />
    </>
  );
}

export default App;
