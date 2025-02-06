export const theme = {
   breakpoints: {
      mobile: "480px",
      tablet: "768px",
      desktop: "1024px",
   },
   media: {
      sm: (styles) => `@media (max-width: 540px) { ${styles} }`,
      md: (styles) => `@media (max-width: 720px) { ${styles} }`,
      lg: (styles) => `@media (max-width: 960px) { ${styles} }`,
      xl: (styles) => `@media (max-width: 1140px) { ${styles} }`,
      xxl: (styles) => `@media (max-width: 1400px) { ${styles} }`,
   },
   fonts: {
      primary: "Helvetica, Arial, sans-serif",
   },
   colors: {
      white: "#ffffff",
      black: "#000000",
      light: "#f3f2f2",
      medium: "#8a857f",
      dark: "#343230",
      danger: "#e11010",
   },
};
