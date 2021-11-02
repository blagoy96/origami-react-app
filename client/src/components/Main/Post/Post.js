const Post = ({ description, author }) => {
  return (
    <div className="post">
      <img src="/blue-origami-bird.png" alt="blue-origami" />
      <p className="description">{description}</p>
      <div>
        <span>
          <small>Author:</small>
          {author}
        </span>
      </div>
    </div>
  );
};

export default Post;
