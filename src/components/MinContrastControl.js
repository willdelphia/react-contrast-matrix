function MinContrastControl({ minContrast, setMinContrast }) {
  return (
    <div id="min-contrast-control">
      <div class="min-contrast-readout">Minimum Contrast: {minContrast}</div>
      <input
        type="range"
        min="0"
        max="21"
        step="0.1"
        value={minContrast}
        onChange={(e) => setMinContrast(e.target.value)}
      />
      <button onClick={() => setMinContrast(3)}>AA</button>
      <button onClick={() => setMinContrast(4.5)}>AAA</button>
    </div>
  );
}

export default MinContrastControl;
