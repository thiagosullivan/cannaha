import styled from "styled-components";

export const ProductCardContainer = styled.div`
    border: 1px solid ${({theme}) => theme.primary};
    border-radius: 10px;
    max-width: 315px;
    width: 100%;
    padding: 1.8rem;
    transition: all 150ms ease-in;
    cursor: pointer;
    
    &:hover {
        box-shadow: 2px 2px 5px rgba(0,0,0,.3);
        transform: scale(1.01);
    }

    .product__card__img {
        margin-bottom: 1rem;
    }

    h4 {
        min-height: 40px;
        font-family: 'Lora', sans-serif;
        font-weight: 200;
        color: ${({theme}) => theme.primary};
        margin-bottom: 1rem;
    }
    p {
        min-height: 75px;
        font-family: 0.9rem;
        text-align: center;
        font-family: 'Lora', sans-serif;
        color: ${({theme}) => theme.greythird};
    }
`;