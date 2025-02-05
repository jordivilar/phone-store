export const theme = {
   breakpoints: {
      mobile: "480px",
      tablet: "768px",
      desktop: "1024px",
   },
   media: {
      mobile: (styles) => `@media (max-width: 480px) { ${styles} }`,
      tablet: (styles) => `@media (max-width: 768px) { ${styles} }`,
      desktop: (styles) => `@media (max-width: 1024px) { ${styles} }`,
   },
   fonts: {
      primary: "Helvetica, Arial, sans-serif",
   },
   colors: {
      primary: "#ffffff",
      secondary: "#000000",
   },
};
