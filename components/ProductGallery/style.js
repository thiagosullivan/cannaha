import styled from "styled-components";

export const ProductGalleryContainer = styled.section`
    max-width: 700px;
    width: 100%;
    margin-right: 3.1rem;

    .prod__img__container {
        max-width: 700px;
        width: 100%;
        height: auto;
        display: block;
        border: 1px solid ${({theme}) => theme.primary};
        border-radius: 5px;

        img {
            border-radius: 5px;
        }
    }
    .prod__gallery__container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 1rem 0;

        .prod__gallery__item {
            width: 150px;
            height: 150px;
            position: relative;
            border: 1px solid ${({theme}) => theme.primary};
            border-radius: 5px;
            cursor: pointer;
            
            img {
                border-radius: 5px;
            }
        }
    }
`;