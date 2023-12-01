// TODO: - render an item
//       - show name
//       - show price
//       - show count
//       - calculate and show amount
//       - call "onIncrement"
//       - call "onDecrement"
//       - call "onDelete"
const Item = ({ item }) => {
  // TODO: don't delete this console.log!!!!!!!
  console.log(`render item ${item?.id}`);

  return (
    <div className="cart-item">
      <div className="details-wrapper">
        {/* TODO: show name */}
        <span className="name">Item Name</span>
        <span>
          {/* TODO: show price */}
          price: <span className="price">$10</span>
        </span>
      </div>

      <dl className="counter-wrapper">
        <dt>count</dt>
        <dd>
          {/* TODO: call onDecrement */}
          <button className="decrement">-</button>
          {/* TODO: show count */}
          <span className="count">3</span>
          {/* TODO: call onIncrement */}
          <button className="increment">+</button>
        </dd>
      </dl>

      <div className="amount-wrapper">
        <span className="label">amount:</span>
        {/* TODO: calculate and show amount */}
        <span className="amount">$30</span>
      </div>

      {/* TODO: call onDeleteItem */}
      <button className="delete-item">x</button>
    </div>
  );
};

export default Item;
