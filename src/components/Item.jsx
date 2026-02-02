const Item = ({ name, price }) => {
  return (
    <div className="post-item">
      <p>{name}</p>
      <p>{price} 円</p>
    </div>
  );
};

export default Item;
