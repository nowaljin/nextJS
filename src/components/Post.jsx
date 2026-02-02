const Post = ({ id, name, date, text }) => {
  return (
    <div className="post-item">
      <p>
        No.{id} 投稿者：{name} 投稿日時：{date}
      </p>
      <p>{text}</p>
    </div>
  );
};

export default Post;
