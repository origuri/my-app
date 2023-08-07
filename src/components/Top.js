import React from 'react';
import '../App.css';
import { useSelector } from 'react-redux';
import store from '../store';

const Top = () => {
  // 분할 힐당 : useSelector는 state를 가져올 수 있음.
  const { number, username } = useSelector((store) => store);

  return (
    <div className="sub_container">
      <h1>top 페이지</h1> 번호 : {number}, 이름 : {username}
    </div>
  );
};

export default Top;
