import React from 'react';

const handleWrite = () => {
  // ListPage의 setPosts에 id하고 제목을 넣어야 함.
  const title = document.querySelector('#title').value;
  let post = { id: 6, title: title };
  console.log(post);
};

const WritePage = () => {
  return (
    <div>
      <h1>글쓰기 페이지</h1>
      <hr />
      <form>
        <input type="text" placeholder={'제목을 입력하세요'} id={'title'} />
        <button type={'button'} onClick={handleWrite}>
          글쓰기
        </button>
      </form>
    </div>
  );
};

export default WritePage;
