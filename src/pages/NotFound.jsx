import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-shadow: var(--shadow);
`;
const NotTitle = styled.h1`
  font-size: 82px;
`;

function NotFound() {
  return (
    <Wrapper>
      <NotTitle>Not Found</NotTitle>
    </Wrapper>
  );
}

export default NotFound;
