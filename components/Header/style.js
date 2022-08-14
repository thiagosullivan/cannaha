import { darken } from "polished";
import styled from "styled-components";

export const HeaderContainer = styled.header`
    max-width: 1650px;
    width: 100%;
    margin: 0 auto;

    .header__content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid ${({theme}) => theme.primary};
        padding: 1rem;
        margin-bottom: 2.1rem;

        .header__search {
            max-width: 300px;
            width: 100%;
            position: relative;

            input {
                width: 100%;
                outline: none;
                height: 35px;
                border: 1px solid ${({theme}) => theme.primary};
                padding: 0 35px 0 10px;
                color: ${({theme}) => theme.primary};
                font-family: 'Prompt', sans-serif;

                &::placeholder {
                    color: ${({theme}) => theme.primary};
                }
            }
            svg {
                position: absolute;
                top: 50%;
                transform: translate(-30px, -50%);
                color: ${({theme}) => theme.primary};
                font-size: 1.3rem;
            }
        }

        .header__logo {
            cursor: pointer;
        }
        
        .header__socialM {
            max-width: 260px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;

            a {
                width: 40px;
                height: 40px;
                background-color: ${({theme}) => theme.primary};
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 1.5rem;
                color: ${({theme}) => theme.white};
                border-radius: 5px;
                transition: all 150ms ease-in;

                &:hover {
                    background-color: ${({ theme }) => darken(0.2, theme.primary)};
                }
            }
        }
    }
`;