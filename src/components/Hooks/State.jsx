import { useState } from "react";
const State = () => {
  const [count, setCount] = useState(0);
  const hanldeClick = () => {
    setCount(count+1);
    console.log(count);
  };
  return (
    <div>
      {count}
      <button onClick={hanldeClick}>click me</button>
    </div>
  );
};

export default State;
