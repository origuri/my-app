import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'; // { }가 있다는 건 defalut export가 아니라는 것.
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

function App() {
  const [data, setData] = useState(0);
  const [search, setSearch] = useState(0);

  const download = () => {
    // 다운로드 받은 데이터가 5라는 가정
    let downloadData = 5;
    setData(downloadData);
  };

  /*
   * 실행시점 :
   * 1. App() 함수가 최초 실행 될 때(최초로 그림이 그려질 때)
   * 2. 상태 변수가 변경 될 때(dependecyList에 등록이 되어있어야 함. )
   *
   * useEffect의 두번째 파라미터가 디펜던시 리스트인데 [] 공백으로 두면
   * 어떤 상태 변수에도 의존하지 않아서 최초 app이 실행될 때에만 실행이 됨.
   *
   * 사용 용도 :
   * 게시판 리스트가 있다고 칠 때 처음 실행하자마자 통신으로
   * 게시판 리스트를 싹 받아와서 뿌릴 수 있음.
   *
   * 특정 게시판을 찾는 검색 함수(search)가 있을 때 그림을 다시 그려야 함.
   * 그러므로 두번째 파라미터에는 [search]가 있어야지 검색이 되지 빈 배열 []이 있으면 검색안됨.
   * */
  useEffect(() => {
    console.log('useEffect 실행됨.');
    download();
  }, [search]);

  const aa = () => {
    // input의 값이 바뀌어야 실행 됨.
    // 1 검색 후 2 검색 하면 상태가 변해서 실행이 되지만 1 검색 후 1 검색하면 상태가 안변해서 실행 안됨.
    const sea = document.querySelector('#search').value;
    setSearch(sea);
  };

  return (
    <div>
      <input type="text" id={'search'}></input>
      <button onClick={aa}>검색</button>
      <h1>데이터 : {data}</h1>
      <button
        onClick={() => {
          setData(data + 1);
        }}
      >
        더하기
      </button>
    </div>
  );
}

export default App;
