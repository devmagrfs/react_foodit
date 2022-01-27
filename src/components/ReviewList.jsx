import './ReviewList.css';

// formatDate를 사람이 볼 수 있는 문자로 변환하는 코드
const formatDate = (value) => {
    const date = new Date(value);
    return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

// ReviewList에서 날아온 데이터를 하나씩 뽑아내는 컴포넌트
const ReviewListItem = ({ item, onDelete }) => {
    const { imgUrl, title, calorie, content, createdAt } = item;
    const handleDeleteClick = () => onDelete(item.id);

    return (
        <div className="ReviewListItem">
            <img className="ReviewListItem-img" src={imgUrl} alt={title}></img>
            <div>
                <h1>{title}</h1>
                <p>{calorie}</p>
                <p>{formatDate(createdAt)}</p>
                <p>{content}</p>
                <button onClick={handleDeleteClick}>삭제</button>
            </div>
        </div>
    )
}

const ReviewList = ({ items, onDelete }) => {
    return (
        <ul>
            {items.map((item) => {
                return (
                    <li key={item.id}>
                        <ReviewListItem item={item} onDelete={onDelete} />
                    </li>
                )
            })}
        </ul>
    )
}

export default ReviewList;