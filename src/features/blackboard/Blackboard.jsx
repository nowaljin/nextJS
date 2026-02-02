"use client";

import Post from "../../components/Post";

const postList = [
  {
    id: 1,
    name: "İlker",
    text: "React öğreniyorum",
    date: "2025-01-20",
  },
  {
    id: 2,
    name: "Ken",
    text: "コンポーネントは便利ですね",
    date: "2025-01-21",
  },
  {
    id: 3,
    name: "Ayumi",
    text: "map が分かってきた！",
    date: "2025-01-22",
  },
];

const Blackboard = () => {
  return (
    <div className="container">
      <p className="title">練習掲示板</p>

      <div className="post-list">
        {postList.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};

export default Blackboard;

