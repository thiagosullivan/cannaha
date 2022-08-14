import darken from "polished/lib/color/darken";
import styled from "styled-components";

export const ProductPageInfosContainer = styled.section`
    max-width: 1650px;
    width: 100%;
    margin: 0 auto;
    padding: 0 1rem;
    display: flex;
`;

export const ProductInfosText = styled.div`
    max-width: 850px;
    width: 100%;

    h1 {
        font-family: 'Lora', serif;
        color: ${({theme}) => theme.greythird};
        font-weight: bold;
        font-size: 3.43rem;
        margin-bottom: 2.5rem;
    }
    p {
        font-size: 1.4rem;
        color: ${({theme}) => theme.greythird};
        text-align: justify;
        line-height: 1.3;
        margin-bottom: 4.5rem;
    }
    a {
        padding: 1rem 5.5rem;
        background-color: ${({theme}) => theme.primary};
        border-radius: 5px;
        color: ${({theme}) => theme.white};
        font-family: 'Prompt', sans-serif;
        font-size: 1.8rem;
        font-weight: bold;
        text-transform: uppercase;
        transition: all 150ms ease-in;

        &:hover {
            background-color: ${({ theme }) => darken(0.2, theme.primary)};
        }
    }
`;