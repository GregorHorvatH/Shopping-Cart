import Title from "./Title";
import ItemList from "./ItemList";
import TotalAmount from "./TotalAmount";

// use the following CRUD API or the proposed initialState
// they have the same data structure
// https://6406287e40597b65de4beab2.mockapi.io/cart

const initialState = [
  { id: "a", price: 4700, name: "Printer", count: 0 },
  { id: "b", price: 3800, name: "Motherboard", count: 0 },
  { id: "c", price: 500, name: "Mouse", count: 0 }
];

// The user should be able:
// - to change the count for each item
// - to remove items from the array

// The shopping cart should:
// - calculate the amount for each item
// - calculate the total amount

// TODO: - finish the Shopping Cart.
//       - create a state
//       - create a "handleIncrement" function
//       - create a "handleDecrement" function
//       - create a "handleDeleteItem" function
//       - pass the items and functions to the components
const Cart = () => {
  return (
    <div className="cart">
      <Title />

      {/* TODO: pass the items
          and functions to the component */}
      <ItemList
        items={[]}
        onIncrement={null}
        onDecrement={null}
        onDelete={null}
      />

      {/* TODO: pass the items to the component */}
      <TotalAmount items={[]} />
    </div>
  );
};

export default Cart;
