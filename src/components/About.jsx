function About(props) {
    /* eslint-disable-next-line react/prop-types */
    const {userProps, age}  = props  
  return (
    <>
      <h2>About Page {userProps}  {age} </h2>
    </>
  );
}

export default About;
