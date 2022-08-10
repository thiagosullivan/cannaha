import styled from "styled-components";

export const HomePresentationContainer = styled.section`
    max-width: 1650px;
    width: 100%;
    margin: 6.5rem auto;

    .presentation__top {
        display: flex;
        align-items: flex-start;
        top: 0;
        margin-left: -36px;
        margin-bottom: 6.25rem;

        .presentationbox {
            background-color: ${({theme}) => theme.primary};
            color: ${({theme}) => theme.white};
            font-family: 'Prompt', sans-serif;
            width: max-content;
            transform: rotate(-90deg);
            padding: 2.5rem;
            
    
            h3 {
                font-size: 7.5rem;
                font-weight: bold;
            }
            p {
                font-size: 1.5rem;
            }
        }
        
        .presetation__top__text {
            margin-top: -50px;

            h2 {
                font-size: 7.5rem;
                font-family: 'Prompt', sans-serif;
                font-weight: bold;
                text-transform: uppercase;
                color: ${({theme}) => theme.primary};
                line-height: 1;
            }
            h3 {
                color: ${({theme}) => theme.greythird};
                text-transform: uppercase;
                font-size: 2.8rem;
                margin-bottom: 1rem;
            }
            p {
                font-family: 'Raleway', sans-serif;
                font-size: 1.5rem;
                color: ${({theme}) => theme.greythird};
                line-height: 35px;
                text-align: justify;
            }

        }
    }

    .presentation__bottom {
        border-top: 1px solid ${({theme}) => theme.grey};
        border-bottom: 1px solid ${({theme}) => theme.grey};
        padding: 3.75rem 0;
        width: max-content;
        margin: 0 auto;

        h3 {
            color: ${({theme}) => theme.greythird};
            font-size: 2.5rem;
            max-width: 1000px;
            width: 100%;
            margin: 0 auto;
            text-align: center;
            margin-bottom: 6.25rem;
        }

        .presentation__item {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 2rem;

            &:last-child {
                margin-bottom: 0;
            }

            p {
                max-width: 1000px;
                width: 100%;
                margin-left: 2.5rem;
                text-align: justify;
                font-family: 'Raleway', sans-serif;
                font-size: 1.1rem;
                line-height: 30px;
            }
        }
    }

`;