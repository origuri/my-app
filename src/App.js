import logo from './logo.svg';
import './App.css';
import { createRef, useEffect, useMemo, useRef, useState } from 'react'; // { }가 있다는 건 defalut export가 아니라는 것.
import Sub from './Sub';
import { cleanup } from '@testing-library/react';
import styled from 'styled-components';
import LoginPage from './pages/LoginPage';

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

const Title2 = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;

function App() {
  return (
    <div>
      <LoginPage />
    </div>
  );
}

export default App;
