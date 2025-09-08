import React, { useState } from "react";

function ColorBox({ color }) {
  const boxStyle = {
    width: "150px",
    height: "150px",
    backgroundColor: color || "lightgray", // màu mặc định khi chưa chọn
    marginTop: "20px",
    border: "2px solid #333",
    borderRadius: "8px",
    transition: "background-color 0.3s ease",
  };

  return <div style={boxStyle}></div>;
}

function App() {
  const colors = ["red", "green", "blue", "yellow"];
  const [currentColor, setCurrentColor] = useState(null);

  return (
    <div style={{
      padding: 20,
      maxWidth: 300,
      margin: "50px auto",
      textAlign: "center",
      fontFamily: "Arial, sans-serif"
    }}>
      <h3>Ứng dụng đổi màu nền</h3>
      <div style={{ marginBottom: 10 }}>
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => setCurrentColor(color)}
            style={{
              marginRight: 10,
              padding: "8px 16px",
              cursor: "pointer",
              borderRadius: 5,
              border: currentColor === color ? "2px solid black" : "1px solid #ccc",
              backgroundColor: currentColor === color ? color : "white",
              color: currentColor === color ? "white" : "black",
              transition: "all 0.2s"
            }}
          >
            {color}
          </button>
        ))}
      </div>
      <ColorBox color={currentColor} />
    </div>
  );
}

export default App;
