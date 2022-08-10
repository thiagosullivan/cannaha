import { darken } from "polished";
import styled from "styled-components";

export const FooterContainer = styled.footer`
    background-color: ${({theme}) => theme.primary};
    
    .footer__content {
        padding: 2.5rem 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;

        .footer__logo {
            cursor: pointer;
        }

        .footer__nav {
            margin-top: 2.1rem;
            margin-bottom: 2.1rem;

            a {
                margin-right: 1rem;
                font-family: 'Lora', serif;
                text-transform: uppercase;
                color: ${({theme}) => theme.white};
                transition: all 150ms ease-in;

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
        }

        .footer__socialM {
            font-size: 1.7rem;
            color: ${({theme}) => theme.white};

            a {
                margin: 0 1rem;
                width: 40px;
                height: 40px;
                transition: all 150ms ease-in;

                &:hover {
                    color: ${({ theme }) => darken(0.2, theme.primary)};
                    transform: scale(1.1);
                }
            }
        }
    }

    .footer__bottom {
        background-color: ${({theme}) => theme.white};
        box-shadow: 0px -3px 6px rgba(0, 0, 0, 0.15);
        padding: .5rem 1rem;

        p {
            font-family: 'Lora', serif;
            color: ${({theme}) => theme.primary};
            text-align: center;
        }
    }
`;