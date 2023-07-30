import React from 'react';
import styled from 'styled-components';

let StyledDeleteButton = styled.button`
  // 여기서의 props는 그냥 변수명일 뿐.
  color: ${(props) => (props.user.username === '오리' ? 'blue' : 'red')};
`;

// function 방식
const Home = (props) => {
  /*
   * 구조분할 할당방식
   * homepage.js에서 props로 boards와 setBoards라는 데이터를 넘긴 상황
   * 보낸 값과 정확하게 일치하게 사용하면 한줄로 props를 분할 가능
   * 매우 편리
   * 데이터 말고 데이터를 조작할 때 필요한 상태 함수도
   * 부모에서 받아야지 조작 가능
   * */
  const { boards, setBoards, user } = props;

  console.log('user 넘어옴? => ', user);
  return (
    <div>
      {/* user를 보냄.*/}
      <StyledDeleteButton user={user} onClick={() => setBoards([])}>
        전체삭제
      </StyledDeleteButton>
      {boards.map((board) => (
        <h3>
          제목 : {board.title} 내용 : {board.content}
        </h3>
      ))}
    </div>
  );
};

export default Home;
