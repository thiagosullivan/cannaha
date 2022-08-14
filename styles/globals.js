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

  /* See More Button */
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

  /* Result Pages */
  #results__page h1 {
    font-size: 4rem;
    font-family: 'Prompt', sans-serif;
    text-align: center;
    color: ${({theme}) => theme.primary};
    margin-bottom: 5.2rem;
    padding-top: 2rem;
  }

  /* Checkbox */
  /* The container */
  .checkbox__container {
    display: block;
    position: relative;
    padding-left: 30px;
    margin-bottom: 12px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  /* Hide the browser's default checkbox */
  .checkbox__container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom checkbox */
  .checkbox__checkmark {
    position: absolute;
    top: 3px;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #eee;
  }

  /* On mouse-over, add a grey background color */
  .checkbox__container:hover input ~ .checkbox__checkmark {
    background-color: #ccc;
  }

  /* When the checkbox is checked, add a blue background */
  .checkbox__container input:checked ~ .checkbox__checkmark {
    background-color: #2196f3;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkbox__checkmark:after {
    content: "";
    position: absolute;
    display: none; 
  }

  /* Show the checkmark when checked */
  .checkbox__container input:checked ~ .checkbox__checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .checkbox__container .checkbox__checkmark:after {
    left: 7px;
    top: 1px;
    width: 4px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;