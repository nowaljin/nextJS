"use client";

import Item from "@/components/Item";

const foodList = [
  { id: 1, name: "ハンバーグ", price: 880 },
  { id: 2, name: "オムライス", price: 780 },
  { id: 3, name: "ナポリタン", price: 720 },
];

const FoodMenu = () => {
  return (
    <div className="container">
      <p className="title">フードメニュー</p>

      <div className="post-list">
        {foodList.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default FoodMenu;
