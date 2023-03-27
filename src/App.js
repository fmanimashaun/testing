import './App.css';
import Mybutton from './components/Mybutton';
import ShoppingList from './components/ShoppingList';

const products = [
  {
    id: 1,
    title: 'Milk',
  },
  {
    id: 2,
    title: 'Bread',
  },
  {
    id: 3,
    title: 'Eggs',
  },
];

function App() {
  return (
    <div>
      <Mybutton />
      <ShoppingList items={products} />
    </div>
  );
}

export default App;
