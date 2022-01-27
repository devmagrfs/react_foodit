import ReviewList from './ReviewList';
import mockitems from '../mock.json';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState(mockitems);
  const [order, setOrder] = useState('createdAt');
  // item을 기준에 따라 정렬시키기 위한 코드
  const sortedItems = items.sort((a, b) => b[order] - a[order])

  const handleNewestClick = () => setOrder('createdAt');
  const handleBestClick = () => setOrder('rating');
  // 6. 즉, 버튼을 누르면 handleDelete 함수의 파라미터로 id가 전달되고 id를 바탕으로 filter 함수로 걸러낸 배열이 새로운 state로 변경된다.
  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id)
    setItems(nextItems);
  }

  return (
    <div className="App">
      <div>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handleBestClick}>베스트순</button>
      </div>
      {/* 5. onDelete prop은 handleDelete 함수이다. */}
      <ReviewList items={sortedItems} onDelete={handleDelete} />
    </div>
  );
}

export default App;
