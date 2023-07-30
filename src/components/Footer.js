import React from 'react';
import styled from 'styled-components';

const FooterBox = styled.div`
  border: 1px;
  width: 100px;
  height: 100px;
`;

const Footer = () => {
  return (
    <div>
      <FooterBox>푸터입니다.</FooterBox>
    </div>
  );
};

export default Footer;
