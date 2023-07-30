import React from 'react';
import styled from 'styled-components';

const LoginBox = styled.div`
  border: 1px;
  width: 600px;
  height: 100px;
`;

const Login = () => {
  return (
    <div>
      <LoginBox>
        <h1>로그인 박스입니다.</h1>
      </LoginBox>
    </div>
  );
};

export default Login;
