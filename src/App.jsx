import About from "./components/About";
import UserContextProvider from "./components/context/UserContextProvider";
import FetchData from "./components/FetchData";
import Home from "./components/Home";
import FormSubmit from "./components/Hooks/FormSubmit";
import SearchComponent from "./components/Hooks/SearchComponent";
import State from "./components/Hooks/State";
import Toggle from "./components/Hooks/Toggle";
import AppLayout from "./components/layout/AppLayout";
import Login from "./components/Login";
import LoginUser from "./components/LoginUser";
import Profile from "./components/Profile";
import ErrorPage from "./components/ErrorPage";
import {RouterProvider, createBrowserRouter} from "react-router-dom"
// import "./components/Home.css"
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement:<ErrorPage />,
      children:[
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ]
    },
    

  ])
  return (
    <>
      <RouterProvider  router={router} />
    </>
  );
}

export default App;
