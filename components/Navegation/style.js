import { darken } from "polished";
import styled from "styled-components";

export const NavegationContainer = styled.nav`
    display: flex;
    justify-content: center;
    margin-bottom: 2.1rem;

    a {

        color: ${({theme}) => theme.primary};
        font-family: 'Lora', serif;
        text-transform: uppercase;
        margin-right: 1rem;
        font-size: 1.15rem;

        &:hover {
            color: ${({ theme }) => darken(0.2, theme.primary)};
            transform: scale(1.05)
            
        }

        &:after {
            content: '|';
            padding-left: 1rem;
        }

        &:last-child {
            &:after {
                content: '';
            }
        }
    }
`