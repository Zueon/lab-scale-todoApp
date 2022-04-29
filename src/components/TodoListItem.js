import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';

const TodoListItem = ({ todo, onRemove, onToggle, style }) => {
  const { id, text, checked } = todo;

  return (
    <div className="TodoListItem-virtualized" style={style}>
      <div className="TodoListItem">
        <div
          className={cn('checkbox', { checked })}
          onClick={() => onToggle(id)}
        >
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          <div className="text">{text}</div>
        </div>
        <div className="remove" onClick={() => onRemove(id)}>
          <MdRemoveCircleOutline />
        </div>
      </div>
    </div>
  );
};

export default React.memo(
  TodoListItem,
  (prevProps, nextProps) => prevProps === nextProps,
);
// 이전 props와 다음 props가 바뀌지 않으면, 즉 변화가 없으면 현재 상태를 유지한다. (현재 컴포넌트를 리렌더링 하지 않는다.)
// 리액트의 리렌더링은 부모 컴포넌트가 리렌더링 될 때, 상태변화가 발생했을 때 리렌더링을 수행함. 이 때 부모컴포넌트의 리렌더링으로 인해 자식 컴포넌트에서
// 상태 변화가 발생하지 않은 컴포넌트들도 모두 리렌더링 되어 비효율적이다, 이를 방지하기 위해 클래스형 컴포넌트는 shouldComponentUpdate() 라는 라이프
// 사이클을 제공하고, 함수형 클래스는 React.memo()를 사용한다.
// 위의 memo 함수에서 두번째 매개변수 (화살표함수)는 생략가능
