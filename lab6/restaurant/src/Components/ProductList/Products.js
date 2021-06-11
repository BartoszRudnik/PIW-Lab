import React, { useContext } from "react";
import { PizzaContext } from "../../Providers/PizzaProvider";
import {
  ProductsContainer,
  ProductWrapper,
  ProductButton,
  ProductsHeading,
  ProductTitle,
  ProductCard,
  ProductDesc,
  ProductPrice,
  ProductInfo,
  ProductImg,
} from "./ProductsElements";

const Products = ({ heading, addToCart }) => {
  const data = useContext(PizzaContext);

  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>
        {data != null &&
          data.map((product, index) => {
            return (
              <ProductCard key={index}>
                <ProductImg src={product.img} alt={product.alt} />
                <ProductInfo>
                  <ProductTitle>{product.name}</ProductTitle>
                  <ProductDesc>{product.desc}</ProductDesc>
                  <ProductPrice>{product.price}</ProductPrice>
                  <ProductButton
                    onClick={() => {
                      addToCart(product.name, product.calc_price);
                    }}
                  >
                    {product.button}
                  </ProductButton>
                </ProductInfo>
              </ProductCard>
            );
          })}
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default Products;
