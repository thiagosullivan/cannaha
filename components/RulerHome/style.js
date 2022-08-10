import styled from "styled-components";

export const RulerHomeContainer = styled.section`
    background-color: ${({theme}) => theme.primary};
    box-shadow: 0px 5px 10px 5px rgba(0, 0, 0, 0.25);
    
    .Ruler__home__content {
        max-width: 1600px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        padding: 3.75rem 1rem;

        .ruler__info {
            color: ${({theme}) => theme.white};
            display: flex;
            /* justify-content: space-between; */
            align-items: flex-start;
            max-width: 315px;
            width: 100%;
            
            svg {
                font-size: 3rem;
                margin-right: 1rem;
                width: 60px;
            }

            .ruler__info__txt {
                width: 100%;

                h5 {
                    font-family: 'Prompt', sans-serif;
                    font-weight: bold;
                    font-size: 0.93rem;
                }
                p {
                    font-family: 'Prompt', sans-serif;
                    font-size: 0.93rem;
                }
            }
        }
    }
`;