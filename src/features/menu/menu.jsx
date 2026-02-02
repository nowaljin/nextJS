"use client";

import Item from "@/components/Item";

const drinkList = [
  { id: 1, name: "ブレンドコーヒー", price: 280 },
  { id: 2, name: "カフェオレ", price: 350 },
  { id: 3, name: "チョコレートパフェ", price: 680 },
];

const Menu = () => {
  return (
    <div className="container">
      <p className="title">ドリンクメニュー</p>

      <div className="post-list">
        {drinkList.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
