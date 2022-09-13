import React, { useState } from "react";

function State() {
  const [count, setCount] = useState(0);

  return (
    <div className="jsx">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default State;
