import styled from "styled-components";

export const ReleaseHomeContainer = styled.section`
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;

    h2 {
        font-size: 4rem;
        color: ${({theme}) => theme.primary};
        font-family: 'Prompt', sans-serif;
        font-weight: bold;
        text-align: center;
        margin-bottom: 3rem;
    }

    .release__prod__container {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(290px, 315px));
        justify-content: center;
        gap: 1rem;
        margin-bottom:  3.4rem;
    }
`;