import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Helvetica';
    src: url('/assets/fonts/helvetica-light-05-webfont.woff2') format('woff2'),
      url('/assets/fonts/helvetica-light-05-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 16px;
  }
  
  main {
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background: #fff;
    color: #000;
  }

  .product-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 0;
    padding: 16px;

    ${(props) =>
       props.theme.media.desktop(`
      grid-template-columns: repeat(3, 1fr);
    `)}

    ${(props) =>
       props.theme.media.tablet(`
      grid-template-columns: repeat(2, 1fr);
    `)}

    ${(props) =>
       props.theme.media.mobile(`
      grid-template-columns: repeat(1, 1fr);
    `)}
  }


  .product-card {
    position: relative;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.secondary};
    text-align: center;
    padding: 20px;
    border: 1px solid #bfbfbf;

    aspect-ratio: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;


    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 0;
      background-color: ${({ theme }) => theme.colors.secondary};
      transition: height 0.4s ease-out;
      z-index: -1;
    }

    &:hover::after {
      height: 100%;
    }
    
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }

    img {
      max-width: 100%;
    }
  }
  

  .product-detail {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0;
    padding: 16px;

    ${(props) =>
       props.theme.media.desktop(`
      grid-template-columns: repeat(2, 1fr);
    `)}

    ${(props) =>
       props.theme.media.tablet(`
      grid-template-columns: repeat(2, 1fr);
    `)}

    ${(props) =>
       props.theme.media.mobile(`
      grid-template-columns: repeat(1, 1fr);
    `)}
  }

  table {
        border-collapse: collapse;
  }

  tr {
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
}
  tr:first-child {
  border-top: 1px solid ${({ theme }) => theme.colors.secondary};
}

td, th {
  padding: 10px;
  text-align: left;
}

tr td:first-child {
  width: 25%;
}


`;

export default GlobalStyle;
