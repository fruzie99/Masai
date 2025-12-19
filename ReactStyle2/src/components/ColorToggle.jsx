import { useState } from "react";

function ColorToggle() {
  const [isRed, setIsRed] = useState(true);

  return (
    <div>
      <h1>Q2: Color Toggle</h1>

      <div
        style={{
          width: "200px",
          height: "100px",
          backgroundColor: isRed ? "red" : "blue",
          marginBottom: "10px",
        }}
      />

      <button onClick={() => setIsRed(!isRed)}>
        Change Color
      </button>
    </div>
  );
}

export default ColorToggle;
