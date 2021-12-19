import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
    width: 100%;
    padding: 2rem 0;
    display: grid;
    grid-template-columns: (1, 1fr);
    gap: 2rem;

    @media(min-width: 767px) {
        grid-template-columns: (2, 1fr);
        gap: 3rem;
        padding: 2.5rem 0;
    }
    @media(min-width: 1024px) {
        grid-template-columns: (4, 1fr);
        gap: 4rem;
    }   
`;

function List ({children}) {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
}

export default List;