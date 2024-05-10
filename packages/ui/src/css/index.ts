import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    
    margin: 0;
    padding: 0;
  }

  html {
    overflow-x: hidden;

    font-size: 20px;
  }

  body {
    overflow-x: hidden;

    display: flex;
    flex-direction: column;
    min-width: 100vw;
    min-height: 100dvh;

    background: ${(props) => props.theme.colors.background};

    color: ${(props) => props.theme.colors.text};
    font-size: .8em;
    font-weight: 400;
    font-family: ${(props) => props.theme.font.secondary};
  }

  h1, 
  h2, 
  h3, 
  h4, 
  h5, 
  h6 {
    font-family: ${(props) => props.theme.font.primary};
    font-weight: bold;
  }

  h1 {
    font-size: 2rem;
    line-height: 2.1rem;

    @media (min-width: 800px) {
      font-size: 3.1rem;
      line-height: 3.2rem;
    }
  }

  h2 {
    font-size: 1.3rem;
    line-height: 1.4rem;

    @media (min-width: 800px) {
      font-size: 1.6rem;
      line-height: 1.7rem;
    }
  }

  h3 {
    font-size: 1.1rem;
    line-height: 1.2rem;

    @media (min-width: 800px) {
      font-size: 1.3rem;
      line-height: 1.4rem;
    }
  }

  h4 {
    font-size: 1rem;
    line-height: 1.1rem;
  }

  h5 {
    font-size: 0.9rem;
    line-height: 1rem;
  }

  h6 {
    font-size: 0.8rem;
    line-height: 0.9rem;
  }

  p,
  code,
  pre {
    font-size: .8rem;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  a, 
  button {
    font-family: ${(props) => props.theme.font.secondary};
  }
`;

export default GlobalStyles;
