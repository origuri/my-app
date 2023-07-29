import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Sub from './Sub';
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

function App() {
  let list = [1, 2, 3];
  console.log('app 실행됨.');
  // let number = 1; 상태 값이 아님.
  const [number, setNumber] = useState(1); // react의 hooks 라이브러리 사용
  const add = () => {
    /*
     * setNumber로만 값을 변경할 수 있음
     * number++; 상수 선언을 했기 때문에 값을 직접적으로 변경할 수 없음.
     * 리엑트한테 number 값 변경할게 라고 요청하는 것.
     * */
    setNumber(number + 1);
    console.log('add', number);
  };
  let sample = [
    { id: 1, name: '홍일' },
    { id: 2, name: '홍이' },
    { id: 3, name: '홍삼' },
    { id: 4, name: '홍사' },
  ];

  const [users, setUsers] = useState(sample);
  /*
   * 기존의 user 객체에 있는 데이터와 값은 동일하지만
   * user 객체와 sample 객체는 서로 다른 객체이므로
   * 같은 값의 데이터할지라도 객체가 다르기 때문에 새로 랜더링이 된다.
   * ...sample은 최초 실행때는 객체가 달라서 리렌더링이 되지만
   * 한번 하고 나면 ...sample은 4개이므로 리렌더링되지만 값은 변하지 않음.
   * */
  const download = () => {
    setUsers([...sample, { id: 5, name: 'aaa' }]);
  };
  // 상태 값이 변해야 랜더링이 실행 됨.
  return (
    <div>
      <h1>숫자 : {number}</h1>
      <button onClick={add}>더하기</button>
      <button onClick={download}>다운로드</button>
      {users.map((u) => (
        <h1>{(u.id, u.name)}</h1>
      ))}
      <Sub />
    </div>
  );
}

export default App;
