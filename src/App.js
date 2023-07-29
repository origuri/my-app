import logo from './logo.svg';
import './App.css';
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

let a = 10; // 변수
const b = 20; // 상수

function App() {
  let c;
  /* 리엑트에선 선언만 하면 null이 아닌 undifined가 선언 됨.*/
  console.log(1, c);
  /* 비추 */
  const myStyle = {
    color: 'red',
  };

  let list = [1, 2, 3];
  return (
    <div>
      안녕1ssds
      {/*{ }를 이용해서 변수를 사용할 수 있음.*/}
      <div style={myStyle}>ss{a === 10 ? '10입니다.' : '10이 아닙니다.'}</div>
      {/* &&를 사용하면 특정 조건에 부합할 때만 렌더링 됨.  */}
      <h1 className="box-style">dd{b === 20 && '20입니다'}</h1>
      <div>
        {list.map((n) => (
          <h1>{n + 10}</h1>
        ))}
      </div>
    </div>
  );
}

export default App;
