import React, { useState } from 'react';
import styled from 'styled-components';

const StyledItemBoxDiv = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  padding: 10px;
  height: 100px;
  margin: 20px;
  align-items: center;
`;

const ListPage = () => {
  // 기존 db에 있는 게시물 상태 값
  // 추가 게시물을 여기에 추가하는 것.
  const [posts, setPosts] = useState([
    { id: 1, title: '제목1', content: '내용1' },
    { id: 2, title: '제목2', content: '내용2' },
    { id: 3, title: '제목3', content: '내용3' },
    { id: 4, title: '제목4', content: '내용4' },
    { id: 5, title: '제목5', content: '내용5' },
  ]);

  // 내가 추가할 게시물 상태값
  const [post, setPost] = useState({ id: '', title: '', content: '' });
  /*
   * 기존 리스트에 post를 추가해줌
   * */
  const handleWrite = () => {
    let newid;
    newid = posts[posts.length - 1].id + 1;
    // 기존 목록에 추가 할 것인데, 새로 쓴 게시물을 유지하면
    // id만 공백이므로, id만 추가해줌. 그걸 posts에 넣는 것.
    setPosts([...posts, { ...post, id: newid }]);
    console.log(post);
  };

  const handleForm = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);

    /*
     * computed property names 문법 키값 동적 할당
     * [키 값] : value값이 된다.
     * 즉 내가 title에 값을 넣으면 title : '제목'
     * content에 값을 넣으면 content : '내용'
     * 이런식으로 동적으로 넣을 수 있음.
     * ...post를 하는 이유는 처음에 title을 post에 업데이트가 된 상태에서
     * content가 들어가야하기 때문
     * ...post가 없으면 처음에 title이 들어가고 content쓸 때 title이 사라짐
     * */
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>글목록 페이지</h1>
      <form>
        <input
          type="text"
          placeholder={'제목을 입력하세요'}
          id={'title'}
          value={post.title}
          onChange={handleForm}
          name={'title'}
        />
        <p />
        <textarea
          type="text"
          placeholder={'내용을 입력하세요'}
          id={'content'}
          value={post.content}
          onChange={handleForm}
          name={'content'}
        />
        <button type={'button'} onClick={handleWrite}>
          글쓰기
        </button>
      </form>
      <hr />

      {posts.map((post) => (
        <StyledItemBoxDiv>
          <div>
            번호 : {post.id} <p />
            제목 : {post.title}
            <p />
            내용 : {post.content}
          </div>
          <button>삭제</button>
        </StyledItemBoxDiv>
      ))}
    </div>
  );
};

export default ListPage;
