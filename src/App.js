import logo from './logo.svg';
import './App.css';
import { useEffect, useMemo, useState } from 'react'; // { }가 있다는 건 defalut export가 아니라는 것.
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

// useMemo => 메모라이제이션(기억)

function App() {
  const [list, setList] = useState([1, 2, 3, 4]);
  const [str, setStr] = useState('합계');

  const getAddResult = () => {
    let sum = 0;
    list.forEach((l) => (sum += l));
    console.log('sum-> ', sum);
    return sum;
  };
  // list의 상태가 변할 때만 getAddResult를 실행하겠다. 라고 기억해 놓는 것
  const addResult = useMemo(() => getAddResult(), [list]);

  const word = () => {
    const changeWord = document.querySelector('#a').value;
    setStr(changeWord);
    console.log('문자 바뀜');
  };

  return (
    <div>
      <input type="text" id={'a'}></input>
      <button
        onClick={() => {
          setList([...list, 10]);
        }}
      >
        리스트값 추가
      </button>
      <button onClick={word}>문자변경</button>
      <div>
        {list.map((l) => (
          <h1>{l}</h1>
        ))}
      </div>
      <div>
        {str} : {addResult}
      </div>
    </div>
  );
}

export default App;
