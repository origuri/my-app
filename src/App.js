import logo from './logo.svg';
import './App.css';
import { createRef, useEffect, useMemo, useRef, useState } from 'react'; // { }가 있다는 건 defalut export가 아니라는 것.
import Sub from './Sub';
import { cleanup } from '@testing-library/react';

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

// useRef(디자인)
// dom을 변경할 때 사용한다.

function App() {
  /*
   * useRef는 current라는 key값을 가지고 있다.
   * html 태그 안에 ref라는 속성으로 myRef를 주고
   * current.style로 css 변경이 가능하다.
   * */
  const myRef = useRef(null);

  const [list, setList] = useState([
    { id: 1, name: '홍일' },
    { id: 2, name: '홍이' },
  ]);

  const myRefs = Array.from({ length: list.length }).map(() => createRef());

  return (
    <div>
      <button
        onClick={() => {
          myRefs[0].current.style.backgroundColor = 'red';
          myRefs[1].current.style.backgroundColor = 'blue';
        }}
      >
        색바꾸기
      </button>
      <div ref={myRef}>박스</div>
      <div>
        {list.map((l, index) => (
          <h1 ref={myRefs[index]}>{l.name}</h1>
        ))}
      </div>
    </div>
  );
}

export default App;
