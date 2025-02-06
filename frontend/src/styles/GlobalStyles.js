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
    font-family: ${({ theme }) => theme.fonts.light};
    font-size: 16px;
  }

  a {
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors.dark};
    }
    &:visited {
      color: ${({ theme }) => theme.colors.dark};
    }
    &:focus {
      color: ${({ theme }) => theme.colors.dark};
    }
  }

  img {
    max-width: 100%;
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

  section {
    padding: 3rem 0;
  }

  .container {
    max-width: 1140px;
    margin: 0 auto;

    ${(props) =>
       props.theme.media.lg(`
      max-width: 1140px;
    `)}

    ${(props) =>
       props.theme.media.md(`
      max-width: 720px;
    `)}

    ${(props) =>
       props.theme.media.sm(`
      max-width: 100%;
    `)}
  }

  .product-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 0;
    padding: 16px;

    ${(props) =>
       props.theme.media.xxl(`
      grid-template-columns: repeat(3, 1fr);
    `)}

    ${(props) =>
       props.theme.media.lg(`
      grid-template-columns: repeat(2, 1fr);
    `)}

    ${(props) =>
       props.theme.media.sm(`
      grid-template-columns: repeat(1, 1fr);
    `)}
  }

  .loading-container {
  position: relative;
  width: 100%;
  height: 1px;
  background-color: #ddd;
  overflow: hidden;
}

.loading-bar {
  position: absolute;
  width: 30%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.dark};
  animation: loading 1.5s infinite linear;
}

@keyframes loading {
  0% {
    left: -30%;
  }
  100% {
    left: 100%;
  }
}



  .product-card {
    position: relative;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.dark};
    text-align: center;
    padding: 20px;
    border: 1px solid #bfbfbf;

    aspect-ratio: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &:hover {
      color: ${({ theme }) => theme.colors.light};
      border: 1px solid ${({ theme }) => theme.colors.dark};
    }

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 0;
      background-color: ${({ theme }) => theme.colors.dark};
      transition: height 0.5s ease-out;
      z-index: -1;
    }

    &:hover::after {
      height: 100%;
    }

    .image {
      width: 100%;
      height: 100%;
      background-size: contain;
      background-position: center center;
      background-repeat: no-repeat;
      margin-bottom: 2rem;
    }

  }

  .product-card-info-wrapper {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
  

  .product-detail {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 6rem;
    padding: 16px;

    ${(props) =>
       props.theme.media.lg(`
      gap: 6rem;
    `)}

    ${(props) =>
       props.theme.media.md(`
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    `)}

    ${(props) =>
       props.theme.media.sm(`
      grid-template-columns: repeat(1, 1fr);
      gap: 2rem;
    `)}

    div {
      justify-content: center;
      display: flex;
      flex-direction: column;

      .product-options {
        display: block;
        margin-bottom: 2rem;
      }
    }

    .product-image {
      width: 100%;
      height: auto;
      opacity: 1;
      transition: opacity 0.3s ease-in-out;
    }

    .product-image.fade-out {
      opacity: 0;
    }

    .product-image.fade-in {
      opacity: 0;
      animation: fadeIn 0.3s forwards;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

  }

  table {
        border-collapse: collapse;
  }

  tr {
    border-bottom: 1px solid ${({ theme }) => theme.colors.dark};
  }

  tr:first-child {
    border-top: 1px solid ${({ theme }) => theme.colors.dark};
  }

tr td {
  padding: 1rem 0;
       }

tr td:first-child {
  width: 25%;
  
  ${(props) =>
     props.theme.media.lg(`
    width: 25%;
  `)}

  ${(props) =>
     props.theme.media.md(`
    width: 30%;
  `)}

  ${(props) =>
     props.theme.media.sm(`
    width: 50%;
  `)}
}

.cart-item {
  display: flex;

  img {
      max-width: 200px;
  }

  div {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
  }
}

@keyframes bounce {
   0% {
      transform: translateY(0); /* Inicia en su posición original */
   }
   30% {
      transform: translateY(-4px); /* Se mueve hacia arriba */
   }
   50% {
      transform: translateY(0); /* Vuelve a la posición original */
   }
   70% {
      transform: translateY(-2px); /* Un pequeño rebote */
   }
   100% {
      transform: translateY(0); /* Finaliza en su posición original */
   }
}

.icon-bounce {
   animation: bounce 0.6s ease; /* 0.6s es el tiempo del rebote */
}


`;

export default GlobalStyle;
