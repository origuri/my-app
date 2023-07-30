import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const HeaderBox = styled.div`
  border: 1px;
  width: 100px;
  height: 100px;
`;

const StyledHeadLink = styled(Link)`
  color: aquamarine;
`;

const Header = () => {
  return (
    <div>
      <div>
        <HeaderBox>
          <ul>
            <li>
              <StyledHeadLink to={'/'}>홈</StyledHeadLink>
            </li>
            <li>
              <StyledHeadLink to={'/login/10'}>로그인</StyledHeadLink>
            </li>
          </ul>
        </HeaderBox>
      </div>
      <>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">react</Navbar.Brand>
            <Nav className="me-auto">
              <Link to={'/'} className={'nav-link'}>
                홈
              </Link>
              <Link to={'/login/10'} className={'nav-link'}>
                로그인
              </Link>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    </div>
  );
};

export default Header;
