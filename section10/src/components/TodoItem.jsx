import "./TodoItem.css";
import { memo } from "react";

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input
        onChange={onChangeCheckbox}
        readOnly
        checked={isDone}
        type="checkbox"
      ></input>
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
};

// 고차 컴포넌트 (HOC)
// export default memo(TodoItem, (prevProps, nextProps) => {
//   // 반환값에 따라, Props가 바뀌었는지 안바뀌었는지 판단.
//   // T -> Props 바뀌지 않음 -> 리렌더링 x
//   // F -> Props 바뀜 -> 리렌더링 o

//   if (prevProps.id !== nextProps.id) return false;
//   if (prevProps.isDone !== nextProps.isDone) return false;
//   if (prevProps.content !== nextProps.content) return false;
//   if (prevProps.date !== nextProps.date) return false;

//   return true;
// });

export default memo(TodoItem);

// 함수 = 객체 타입
// 새롭게 생성될때마다 함수를 다른 값으로 인식해서 리렌더링이 일어난다.
// 객체의 비교 - 주속값 기반
// 생성될 때마다 다른 주소값을 가진다.
// 앱 컴포넌트가 리렌더링되면 내부의 함수들도 전부 다 다시 생성된다.
// props로 전달 받을 때도 매번 새로운 함수가 전달된다.

// 1. 앱 컴포넌트의 함수들을 메모이제이션한다.
// 2. todoItem 컴포넌트 메모 함수 안에 두 번째 인수로 콜백 함수를 추가로 전달해서 최적화 기능을 커스터마이징 하면 된다.
