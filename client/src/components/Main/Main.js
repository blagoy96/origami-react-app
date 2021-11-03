import Post from "./Post/Post";
import "./Main.css";
const Main = ({ posts }) => {
  return (
    <main className="main">
      <h1>Someee Heading</h1>
      <div className="posts">
        {posts.map((x) => (
          <Post key={x.id} description={x.description} author={x.author} />
        ))}
      </div>
    </main>
  );
};

export default Main;
