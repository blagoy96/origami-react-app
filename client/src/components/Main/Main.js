import Post from "./Post/Post";
const Main = (posts) => {
  return (
    <main className="main">
      <h1>Someee Heading</h1>
      <h2>{console.log(posts)}</h2>
      <div className="posts">
        {posts.map((x) => (
          <Post description={x.description} author={x.author} />
        ))}
      </div>
    </main>
  );
};

export default Main;
