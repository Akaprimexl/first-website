"use client";

import { useState } from "react";

export default function Sayac() {
  const [say, setSay] = useState(0);

  return (
    <div className="counter-box">
      <div className="counter-top">
        <span>INTERACTIVE COUNTER</span>
        <span className="counter-status">● LIVE</span>
      </div>

      <div className="counter-number">
        {say.toString().padStart(2, "0")}
      </div>

      <div className="counter-buttons">
        <button onClick={() => setSay((value) => value - 1)}>
          −
        </button>

        <button
          className="reset-button"
          onClick={() => setSay(0)}
        >
          Reset
        </button>

        <button onClick={() => setSay((value) => value + 1)}>
          +
        </button>
      </div>
    </div>
  );
}

