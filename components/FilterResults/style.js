import styled from "styled-components";

export const FilterResultsContainer = styled.div`
    max-width: 365px;
    width: 100%;
    height: max-content;
    background-color: ${({theme}) => theme.primary};
    padding: 1.8rem;

    h3 {
        font-size: 1.5rem;
        font-family: 'Prompt', sans-serif;
        font-weight: 400;
        text-transform: uppercase;
        text-align: center;
        color: ${({theme}) => theme.white};
        margin-bottom: 1.5rem;
    }
    form {
        display: flex;
        flex-direction: column;

        .checkbox__container {
            font-family: 'Prompt', sans-serif;
            font-weight: 400;
            color: ${({theme}) => theme.white};
            border-bottom: 1px solid ${({theme}) => theme.white};
            padding-bottom: 0.8rem;
            margin-bottom: 1rem;

            input {
                margin-right: 0.5rem;
            }
        }

        button {
            background-color: ${({theme}) => theme.white};
            border: none;
            font-size: 1rem;
            font-family: 'Prompt', sans-serif;
            padding: 0.8rem;
            color: ${({theme}) => theme.primary};
            margin-top: 2rem;
        }
    }
`;