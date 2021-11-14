import { useParams } from "react-router-dom";

const About = () => {
  return (
    <main className="main">
      <h1>About {useParams().name} Page</h1>
    </main>
  );
};

export default About;
