function ColorInput({
  color,
  colorCount,
  index,
  updateColor,
  deleteColor,
  duplicateColor,
}) {
  return (
    <li className="color-row">
      <div className="index">{index + 1}</div>
      <input
        type="text"
        className="text-input"
        value={color}
        onInput={(e) => updateColor(index, e.target.value)}
      />
      <input
        type="color"
        className="color-input"
        value={color}
        onChange={(e) => updateColor(index, e.target.value)}
      />
      <button
        onClick={() => duplicateColor(index)}
        className="duplicate-button button"
      >
        Duplicate
      </button>
      <button
        onClick={() => deleteColor(index)}
        className="delete-button button"
        disabled={colorCount < 3}
      >
        Delete{" "}
      </button>
    </li>
  );
}

export default ColorInput;
