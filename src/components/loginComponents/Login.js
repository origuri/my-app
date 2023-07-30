import React from 'react';
import styled from 'styled-components';

const LoginBox = styled.div`
  border: 1px;
  width: 100px;
  height: 100px;
`;

const Login = () => {
  return (
    <div>
      <LoginBox>로그인 박스입니다.</LoginBox>
    </div>
  );
};

export default Login;
