import ReviewList from './ReviewList';
import { getFoods } from '../api';
import { useState, useEffect } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState('createdAt');
  // item을 기준에 따라 정렬시키기 위한 코드
  const sortedItems = items.sort((a, b) => b[order] - a[order])

  const handleNewestClick = () => setOrder('createdAt');
  const handleCalorieClick = () => setOrder('calorie');

  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id)
    setItems(nextItems);
  }

  const handleLoad = async (orderQuery) => {
    const { foods } = await getFoods(orderQuery);
    setItems(foods)
  }

  useEffect(() => {
    handleLoad(order);
  }, [order]);

  return (
    <div className="App">
      <div>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handleCalorieClick}>칼로리순</button>
      </div>
      <ReviewList items={sortedItems} onDelete={handleDelete} />
    </div>
  );
}

export default App;
