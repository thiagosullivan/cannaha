import { darken, lighten } from 'polished';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    ::-webkit-scrollbar {
      width: 8px;
      height: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.primary};
      border-radius: 5px;
    }
    ::-webkit-scrollbar-track{
      background: ${({ theme }) => lighten(0.4, theme.primary)};
    }
    scroll-behavior: smooth;
  }
  body {
    background: ${props => props.theme.background};
    font: 400 1rem 'Montserrat', sans-serif;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }
  img {
    /* width: 100%;
    max-width: 100%; */
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  .disableScroll {
    height: 100%;
    overflow-y: hidden;
  }
  .seemore__btn a {
      background-color: ${({theme}) => theme.primary};
      color: ${({theme}) => theme.white};
      font-family: 'Prompt', sans-serif;
      font-size: 1.3rem;
      padding: 0.93rem 2.1rem;
      display: flex;
      text-align: center;
      width: max-content;
      border-radius: 5px;
      margin: 0 auto 6.25rem;
      transition: all 150ms ease-in;

      &:hover {
        background-color: ${({ theme }) => darken(0.2, theme.primary)};
      }
  }
`;