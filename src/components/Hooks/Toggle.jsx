import { useState } from "react";

const Toggle = () => {
  const [first, setfirst] = useState(false);
  const hanldeClick = () => {
    if (first) {
      setfirst(false);
    } else {
      setfirst(true);
    }
  };
  return (
    <div>
      {first ? <p>Hide and Show</p> : null}

      <button onClick={hanldeClick}>Toggle</button>
    </div>
  );
};

export default Toggle;
