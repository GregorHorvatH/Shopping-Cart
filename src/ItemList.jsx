import Item from "./Item";

// TODO: - render the items list
//       - pass the necessary props to the items
const ItemList = ({ items = [] }) => (
  <div className="item-list">
    {/*
      TODO: replace this three items
      with a dynamically generated list
    */}
    <Item />
    <Item />
    <Item />
  </div>
);

export default ItemList;
