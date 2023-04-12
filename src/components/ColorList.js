import ColorInput from "./ColorInput";

function ColorList({ colors, colorModifiers }) {
  console.log(colorModifiers);
  return (
    <ul className="color-list">
      {colors.map((color, i) => (
        <ColorInput
          color={colors[i]}
          colorCount={colors.length}
          {...colorModifiers}
          index={i}
        />
      ))}

      {colors}
    </ul>
  );
}

export default ColorList;
