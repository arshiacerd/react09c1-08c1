import { useContext, useState } from "react";
import UserContext from "./context/UserContext";

const LoginUser = () => {
  const [data, setData] = useState();
  const { setuser} = useContext(UserContext);
  function handleSubmit(e) {
    e.preventDefault();
    setuser(data)

  }
  return (
    <div>
      <input type="text" onChange={(e) => setData(e.target.value)} />
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
};

export default LoginUser;
