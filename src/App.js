import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ListPage from './pages/ListPage';
import WritePage from './pages/WritePage';
import Header from './components/Header';
import Navigation from './components/Navigation';
import React, { useState } from 'react';
import Top from './components/Top';
import Bottom from './components/Bottom';

/*
 * 1. return 시에 하나의 dom만 리턴할 수 있다.
 * 2. 변수 선언은 let 또는 const로만 해야 함.
 * 3. if 사용 불가능 -> 삼항연산자를 사용 가능(조건 ? 값(true) : 값(false))
 * 4. 조건부 렌더링 -> &&
 * 5. 리엑트에선 선언만 하면 null이 아닌 undifined가 선언 됨.
 * 6. css 디자인
 *      - 내부에 적는 방법
 *      - 외부 파일에 적는 방법
 *      - 라이브러리를 사용하는 방법(부트스트랩, compent-style 등)
 * */

/*
 *  styled-components
 *  js 문법을 사용해서 동적으로 css를 추가할 수 있음.
 *  css는 app 함수 바깥에 선언해야 재실행 되지 않음.
 *  install 후에 작동이 안된다면 인텔리제이 껐다 키면 됨.
 *  최대의 장점은 css와 js를 한 컴포넌트로 묶어 사용함으로써 유지보수의 장점이 있다.
 * */

/*
 * path는 url을 의미
 * exact = true는 정확한 주소만 찾겠다는 의미
 * false일 경우 / 만 치면 home과 loginpage 둘다 찾음
 * 이게 사실 페이지 이동처럼 보이지만 완성되어 있는 페이지를 교체할 뿐.
 * */
function App() {
  return (
    <div className={'container'}>
      {/* <Routes>
        <Route path={'/'} exact={true} element={<ListPage />} />
      </Routes>*/}
      <h1>최상단화면</h1>
      <Top />
      <Bottom />
    </div>
  );
}

export default App;
