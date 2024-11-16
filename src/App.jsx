import UserContextProvider from "./components/context/UserContextProvider";
import FetchData from "./components/FetchData";
import Home from "./components/Home";
import FormSubmit from "./components/Hooks/FormSubmit";
import SearchComponent from "./components/Hooks/SearchComponent";
import State from "./components/Hooks/State";
import Toggle from "./components/Hooks/Toggle";
import Login from "./components/Login";
import LoginUser from "./components/LoginUser";
import Profile from "./components/Profile";
// import "./components/Home.css"
function App() {
  return (
    <>
      <UserContextProvider>
        <LoginUser />
        <Profile/>
      </UserContextProvider>
    </>
  );
}

export default App;
