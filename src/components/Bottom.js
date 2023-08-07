import React from 'react';
import '../App.css';
import { useDispatch } from 'react-redux';
import { decrease, increase } from '../store';

const Bottom = () => {
  // useDispatch()는 store.js의 액션을 불러올 수 있다.
  const dispatcher = useDispatch();

  return (
    <div className={'sub_container'}>
      bottom 페이지
      <button onClick={() => dispatcher(increase('ori'))}>증가</button>
      <button onClick={() => dispatcher(decrease())}>감소</button>
    </div>
  );
};

export default Bottom;
