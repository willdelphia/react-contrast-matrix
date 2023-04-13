import { ColorContrastCalc } from "color-contrast-calc";

function ContrastCell({ color1, color2, minContrast }) {
  //display nothing if they are the same color
  if (color1 === color2) {
    return;
  }

  const colorOne = ColorContrastCalc.colorFrom(color1);
  const colorTwo = ColorContrastCalc.colorFrom(color2);
  const ratio = parseFloat(colorOne.contrastRatioAgainst(colorTwo).toFixed(2));

  return (
    <div className="contrast-cell">
      <div className="outer-pip" style={{ background: color1 }}>
        <div className="inner-pip" style={{ background: color2 }}></div>
      </div>
      {ratio}
      {ratio >= minContrast ? (
        <div className="pass-chip">Pass</div>
      ) : (
        <div className="fail-chip">Fail</div>
      )}
    </div>
  );
}

export default ContrastCell;
