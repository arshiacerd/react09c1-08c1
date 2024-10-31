import About from "./About";

function Home() {
  var username = "arshia";

  return (
    <>
      <h1>Home Page {username}</h1>;
      <About  userProps={username} age={24} />
    </>
  );
}

export default Home;
