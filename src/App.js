import "./App.css";
import { useState } from "react";

import ColorList from "./components/ColorList.js";
import MinContrastControl from "./components/MinContrastControl";
import Matrix from "./components/Matrix";

function App() {
  const [colors, setColors] = useState(["#000000", "#ffffff"]);
  const [minContrast, setMinContrast] = useState(3);

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

  function addColor() {
    const newColors = [...colors];
    newColors.push("#000000");
    setColors(newColors);
  }

  const colorModifiers = {
    updateColor,
    deleteColor,
    duplicateColor,
    addColor,
  };

  return (
    <>
      <header>
        <h1>Contrast Matrix</h1>
      </header>
      <ColorList colorModifiers={colorModifiers} colors={colors} />
      <MinContrastControl
        minContrast={minContrast}
        setMinContrast={setMinContrast}
      />
      <Matrix colors={colors} minContrast={minContrast} />
      <div style={{ textAlign: "center" }}>
        By Will Delphia, written in React. <br />
        <a href="https://contrast-matrix.netlify.app/">Original Vue Version</a>
      </div>
    </>
  );
}

export default App;
