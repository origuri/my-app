import React from 'react';
import Login from '../components/loginComponents/Login';
import {
  useLocation,
  useMatch,
  useNavigate,
  useParams,
} from 'react-router-dom';

const LoginPage = () => {
  // useParam을 이용해 파라미터 값 확인 가능
  const { id } = useParams();
  // 뒤로가기, 원하는 url로 가기 등 사용가능
  const navigate = useNavigate();
  const location = useLocation();
  const match = useMatch('/login/:id');

  console.log('loginPage id-> ', id);
  console.log('location: ', location);
  console.log('match: ', match);
  console.log('navigate: ', navigate);
  return (
    <div>
      <Login />
      <button onClick={() => navigate(-1)}>뒤로가기</button>
      {/*원하는 url를 적으면 거기로 이동함.*/}
      <button onClick={() => navigate('/')}>홈으로 가기</button>
    </div>
  );
};

export default LoginPage;
