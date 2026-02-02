"use client";

import Link from "next/link";

const Profile = () => {
  let imageUrl = "";

  // imageUrl = "/images/nextjs.png";

  return (
    <>
      <img src="/images/leek.png" alt="leek"/>
      <h1 className="title">プロフィール</h1>
      <p>
        名：シェナル。
      </p>
      {imageUrl && <img src={imageUrl} alt="profile" />}

      <br />

      <Link href="/">戻る</Link>
    </>
  );
};

export default Profile;
