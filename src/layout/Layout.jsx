import React from 'react';
import styled from 'styled-components';

function Layout({ children }) {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
}

export default Layout;

const Wrapper = styled.div`
  height: fit-content;
  background-color: #9c9c9c;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div`
  width: 390px;
  height: fit-content;
  background-color: white;
`;
