"use client";

import Link from "next/link";

const Home = () => {
  const title = "Home";
  const isLogin = true;

  const showMessage = (text) => {
    return <p>{text}</p>;
  };

  return (
    <>
      <p className={isLogin ? "text-success" : "text-danger"}>
        {isLogin ? "ログイン中" : "ログアウト"}
      </p>

      {isLogin && <p style={{color: "red", fontSize: "32px", }}>頑張るぞ</p>}

      <p className="title">Next.js</p>
          <Link href="/access">
          <img src="/images/nextjs.png" alt="next.js"/>
          </Link>
      <p
        className="title"
        onClick={() => console.log("clicked")}
      >
      </p>

      <div>
        <a href="/profile">プロフィール（aタグ）</a>
      </div>

      <div>
        <Link href="/profile">プロフィール（Link）</Link>
      </div>

      <div>
        <Link href="/count">カウントページ</Link>
      </div>

      <div>
        <Link href="/fortune">おみくじ</Link>
      </div>
    </>
  );
};

export default Home;
