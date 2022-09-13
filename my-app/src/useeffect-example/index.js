import React, { useState, useEffect } from "react";

function Effect() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState("");

  useEffect(() => {
    const date = new Date();
    setTime(date.toISOString());
  }, [count]);

  return (
    <div className="jsx">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>click at {time}</p>
    </div>
  );
}

export default Effect;
