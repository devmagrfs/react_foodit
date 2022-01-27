import ReviewList from './ReviewList';
import { getReviews } from '../api';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState('createdAt');
  // item을 기준에 따라 정렬시키기 위한 코드
  const sortedItems = items.sort((a, b) => b[order] - a[order])

  const handleNewestClick = () => setOrder('createdAt');
  const handleBestClick = () => setOrder('rating');

  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id)
    setItems(nextItems);
  }

  const handleLoadClick = async () => {
    const { reviews } = await getReviews();
    setItems(reviews)
  }

  return (
    <div className="App">
      <div>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handleBestClick}>베스트순</button>
      </div>
      <ReviewList items={sortedItems} onDelete={handleDelete} />
      <button onClick={handleLoadClick}>불러오기</button>
    </div>
  );
}

export default App;
