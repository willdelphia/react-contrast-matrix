import ContrastCell from "./ContrastCell";

function Matrix({ colors, minContrast }) {
  function validateColorCode(userColor) {
    return /^#([0-9A-F]{3}){1,2}$/i.test(userColor);
  }

  const uniqueColors = [...new Set(colors)];
  const validColors = uniqueColors.filter((color) => validateColorCode(color));

  return (
    <div className="matrix-container">
      <table className="matrix-table">
        <thead>
          <tr>
            <td className="empty-corner"></td>
            {validColors.map((color) => (
              <th scope="col">{color}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {validColors.map((color1) => (
            <tr>
              <th>{color1}</th>
              {validColors.map((color2) => (
                <td>
                  <ContrastCell
                    color1={color1}
                    color2={color2}
                    minContrast={minContrast}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Matrix;
