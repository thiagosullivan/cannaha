import styled from "styled-components";

export const InstagramFeedContainer = styled.section`

    max-width: 1600px;
    width: 100%;
    margin: 3.75rem auto;

    h2 {
        font-size: 3.75rem;
        color: ${({theme}) => theme.primary};
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 2.5rem;

        svg {
            margin-right: 1rem;
        }
    }

    .instagram__content {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        justify-content: center;

        .instagram__imgs {
            max-width: 400px;
            width: 100%;
        }

        @media screen and (max-width: 606px){
            width: max-content;
            margin: 0 auto;
            gap: 1rem;
        }
    }
`;