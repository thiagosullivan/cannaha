import styled from "styled-components";

export const ResultPageContainer = styled.section`
    max-width: 1650px;
    width: 100%;
    margin: 0 auto;
    padding: 0 1rem;
    display: flex;
    
    .Results__mapping {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(290px, 315px));
        justify-content: center;
        gap: 1rem;
        width: 100%;
        align-items: center;
        margin-bottom:  3.4rem;
    }
`;