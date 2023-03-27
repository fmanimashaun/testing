import { useState } from 'react';
import './App.css';
import Mybutton from './components/Mybutton';
import ShoppingList from './components/ShoppingList';
import Screen from './components/Screen';

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];



function App () {
  const [count, setCount] = useState(0);

  const incraseCount = () => {
    setCount(count + 1);
    console.log(count);
  };

  return (
    <div>
      <Mybutton onButtonClick={incraseCount} counter={count} />
      <Screen counter={count} />
      <Screen counter={count} />
      <ShoppingList items={products} />
      <Mybutton onButtonClick={incraseCount} counter={count} />
    </div>
  );
}

export default App;
