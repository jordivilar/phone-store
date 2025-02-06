const useCartAnimation = (productImageSelector, cartIconSelector) => {
   const handleAddToCartAnimation = () => {
      const productImage = document.querySelector(productImageSelector);
      const cartIcon = document.querySelector(cartIconSelector);

      if (!productImage || !cartIcon) {
         console.error("Elements not found!");
         return;
      }

      const imageRect = productImage.getBoundingClientRect();
      const cartRect = cartIcon.getBoundingClientRect();

      const flyingImage = productImage.cloneNode(true);
      flyingImage.style.position = "fixed";
      flyingImage.style.top = `${imageRect.top}px`;
      flyingImage.style.left = `${imageRect.left}px`;
      flyingImage.style.width = `${imageRect.width}px`;
      flyingImage.style.height = `${imageRect.height}px`;
      flyingImage.style.opacity = "1";
      flyingImage.style.transition = "all 0.8s ease-in-out";
      flyingImage.style.zIndex = "1000";

      document.body.appendChild(flyingImage);

      setTimeout(() => {
         flyingImage.style.top = `${cartRect.top}px`;
         flyingImage.style.left = `${cartRect.left}px`;
         flyingImage.style.width = "20px";
         flyingImage.style.height = "20px";
         flyingImage.style.opacity = "0.5";
      }, 10);

      setTimeout(() => {
         flyingImage.remove();
      }, 800);
   };

   return handleAddToCartAnimation;
};

export default useCartAnimation;
