import About from "./About";
// import "./Home.css"
import style from "./Home.module.css"
function Home() {
  var username = "arshia";

  return (
    <>
      <h1 style={{color:"red", backgroundColor:"black"}}>Home Page {username}</h1>;
      <h2 style={style.h2}>Heading 2</h2>
      <About  userProps={username} age={24} />
    </>
  );
}

export default Home;
