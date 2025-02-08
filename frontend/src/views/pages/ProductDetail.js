import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useCart } from "../../context/CartContext";
import useCartAnimation from "../../hooks/useCartAnimation";

import { getProduct } from "../../redux/features/product/productSlice";

import {
  Button,
  ColorRadioButton,
  ColorRadioWrapper,
  StorageRadioButton,
  StorageRadioWrapper,
} from "../../styles/Button.styles";
import {
  ProductName,
  ProductPrice,
  ProductOptions,
  H2,
  SmText,
  XsText,
} from "../../styles/Text.styles";

import Specifications from "../components/product_details/Specifications";
import SimilarProducts from "../components/product_details/SimilarProducts";

export default function ProductDetail() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);

  const { id } = useParams();

  const { addToCart } = useCart();

  const [price, setPrice] = useState("");
  const [selectedStorage, setSelectedStorage] = useState("");
  const [selectedColorImage, setSelectedColorImage] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [hoveredColor, setHoveredColor] = useState("");

  const handleAddToCartAnimation = useCartAnimation(".product-image", ".cart-icon");

  const isButtonDisabled = !(selectedStorage && selectedColor);

  const getProductImage = (color, storage) => {
    const colorOption = product.colorOptions.find((option) => option.name === color);
    if (colorOption) {
      return colorOption.imageUrl;
    }

    return product.colorOptions[0].imageUrl;
  };

  const calculatePrice = (storage) => {
    const storageOption = product.storageOptions.find((option) => option.capacity === storage);
    return storageOption ? storageOption.price : product.basePrice;
  };

  const handleAddToCart = () => {
    const customProduct = {
      id: `${product.id}_${selectedStorage}_${selectedColor}`,
      image: getProductImage(selectedColor),
      name: product.name,
      storage: selectedStorage,
      color: selectedColor,
      price: calculatePrice(selectedStorage),
    };

    addToCart(customProduct);
    handleAddToCartAnimation();

    setTimeout(() => {
      navigate("/cart");
    }, 1000);
  };

  const handleStorageChange = (e) => {
    const selectedCapacity = e.target.value;
    setSelectedStorage(selectedCapacity);

    const selectedStorageOption = product.storageOptions.find(
      (option) => option.capacity === selectedCapacity
    );

    if (selectedStorageOption) {
      setPrice(selectedStorageOption.price);
    }
  };

  const handleColorChange = (e) => {
    const selectedColorName = e.target.value;
    setSelectedColor(selectedColorName);

    const selectedColorOption = product.colorOptions.find(
      (colorOption) => colorOption.name === selectedColorName
    );

    if (selectedColorOption) {
      const imageElement = document.querySelector(".product-image");

      imageElement.classList.add("fade-out");

      setTimeout(() => {
        setSelectedColorImage(selectedColorOption.imageUrl);

        imageElement.classList.remove("fade-out");
      }, 500);
    }
  };

  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);

  useEffect(() => {
    setPrice(`From ${product.basePrice}`);
  }, [product]);

  return (
    <>
      <Link to="/">
        <SmText>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="20px"
            width="20px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15.28 5.22a.75.75 0 0 1 0 1.06L9.56 12l5.72 5.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-6.25-6.25a.75.75 0 0 1 0-1.06l6.25-6.25a.75.75 0 0 1 1.06 0Z"></path>
          </svg>
          BACK
        </SmText>
      </Link>
      <div className="container">
        {product && product.colorOptions && product.colorOptions.length > 0 && (
          <>
            <section className="product-detail">
              <div>
                <img
                  className="product-image"
                  src={selectedColorImage || product.colorOptions[0].imageUrl}
                  alt={product.name}
                />
              </div>
              <div>
                <ProductName>{product.name.toUpperCase()}</ProductName>
                <ProductPrice>{price} EUR</ProductPrice>

                <div className="product-options">
                  <ProductOptions>STORAGE: HOW MUCH SPACE DO YOU NEED?</ProductOptions>
                  {product.storageOptions.map((item, index) => (
                    <label key={`capacity_${index}`}>
                      <StorageRadioButton
                        id={`storage_option_${index}`}
                        name="storage_options"
                        value={item.capacity}
                        onChange={handleStorageChange}
                      />
                      <StorageRadioWrapper htmlFor={`storage_option_${index}`}>
                        {item.capacity}
                      </StorageRadioWrapper>
                    </label>
                  ))}
                </div>

                <div className="product-options">
                  <ProductOptions>COLOR. PICK YOUR FAVOURITE</ProductOptions>
                  {product.colorOptions.map((item, index) => (
                    <label key={`capacity_${index}`}>
                      <ColorRadioButton
                        id={`color_option_${index}`}
                        name="color_options"
                        value={item.name}
                        onChange={handleColorChange}
                      />
                      <ColorRadioWrapper
                        htmlFor={`color_option_${index}`}
                        $bgColor={item.hexCode}
                        onMouseEnter={() => setHoveredColor(item.name)}
                        onMouseLeave={() => setHoveredColor("")}
                      />
                    </label>
                  ))}
                  <XsText>{hoveredColor || selectedColor}</XsText>
                </div>

                <Button $black disabled={isButtonDisabled} onClick={handleAddToCart}>
                  ADD TO CART
                </Button>
              </div>
            </section>

            <section>
              <div className="">
                <H2>SPECIFICATIONS</H2>
                <Specifications data={product} />
              </div>
            </section>

            <section>
              <H2>SIMILAR ITEMS</H2>
              {product.similarProducts && product.similarProducts.length > 0 && (
                <SimilarProducts data={product.similarProducts} />
              )}
            </section>
          </>
        )}
      </div>
    </>
  );
}
