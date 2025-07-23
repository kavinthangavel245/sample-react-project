import ShoppingListItems from './ShoppingListItems';
function ShoppingList({ items }) {
  return (
    <ul>
      {items.map((i) => (
        <ShoppingListItems
        key={i.item}
        item={i.item}
        quantity={i.quantity}
        completed={i.completed}
        />
      ))}
    </ul>
  );
}

export default ShoppingList;
