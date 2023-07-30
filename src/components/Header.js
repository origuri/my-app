import React from 'react';
import styled from 'styled-components';

const HeaderBox = styled.div`
  border: 1px;
  width: 100px;
  height: 100px;
`;

const Header = () => {
  return (
    <div>
      <HeaderBox>헤더입니다.</HeaderBox>
    </div>
  );
};

export default Header;
