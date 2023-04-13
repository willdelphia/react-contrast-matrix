import ColorInput from "./ColorInput";

function ColorList({ colors, colorModifiers }) {
  console.log(colorModifiers);
  return (
    <>
      <ul className="color-list">
        {colors.map((color, i) => (
          <ColorInput
            color={colors[i]}
            colorCount={colors.length}
            {...colorModifiers}
            index={i}
          />
        ))}
      </ul>
      <div class="action-row">
        <button onClick={colorModifiers.addColor}>Add Color</button>
      </div>
    </>
  );
}

export default ColorList;
