import ShoppingList from './ShoppingList';


const data = [
  { item: "eggs", quantity: 12, completed: false },
  { item: "milk", quantity: 1, completed: true },
  { item: "chicken breasts", quantity: 4, completed: false },
  { item: "carrots", quantity: 6, completed: true },
];
function App(){
  return(
    <div>
    <ShoppingList items={data}/>
    </div>
  );
}
export default App;