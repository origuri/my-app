import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/home/Home';

/*
 * 홈페이지에서 http 요청을 해야함
 * ajax를 써야하지만 순수 js 문법인 fetch를 사용할 예정
 * 데이터는 항상 페이지가 들고 있게 하기 .
 * 이유는 컴포넌트는 재사용이 될 수 있는데 데이터는 필요없을 수도 있음.
 * 또한 데이터는 부모에서 자식으로만 줄 수 있음 자식에게 데이터가 있으면
 * 컨트롤하기 어려워짐.
 * 데이터를 변화 시키고 싶으면 setBoards도 자식 컴포넌트한테 보내줘야 함.
 * */

const HomePage = () => {
  const [boards, setBoards] = useState([]);
  const [user, setUser] = useState({});

  // 빈 배열이므로 최초 실행때만 실행됨.
  useEffect(() => {
    /*
     * ajax, fetch, axios 등으로 비동기 다운로드를 시작함.
     * 최초 실행시에는 빈 데이터가 setBoards에 세팅이 됨.
     * 데이터 다운로드가 완료 되면 그 후에 다시 리렌더링이 되서 값이 들어가게 해야함.
     * 그러므로 상태 값을 사용해야 함.
     * 상태 값을 사용하지 않으면 그냥 빈페이지가 나오고 끝.
     * */
    let data = [
      { id: 1, title: '제목1', content: '내용1' },
      { id: 2, title: '제목2', content: '내용2' },
      { id: 3, title: '제목3', content: '내용3' },
    ];

    setBoards([...data]);
    setUser({ id: 1, username: '오리' });
  }, []);

  return (
    <div>
      <Header />
      {/*boards 속성을 home 컴포넌트로 보낼 수 있는데 이를 prop이라고 한다.
        useEffect로 다운로드를 시작하면 처음에는 빈데이터가 들어감.
        그리고 다운이 완료되면 페이지가 다시 리렌더링 되면서 다운로드 데이터가 들어감.
        그래서 prop으로 넘기는 데이터는 상태 데이터를 넣어야 함.
      */}
      <Home boards={boards} setBoards={setBoards} user={user} />
      <Footer />
    </div>
  );
};

export default HomePage;
