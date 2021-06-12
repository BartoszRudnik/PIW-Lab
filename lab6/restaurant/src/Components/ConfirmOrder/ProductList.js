import React from "react";
import {
  ProductInfo2,
  ProductCard2,
  ProductTitle,
  ProductDesc,
  ProductPrice2,
} from "../ProductList/ProductsElements";

const ProductList = ({ actualOrder }) => {
  return actualOrder.map((product) => (
    <div key={product.uniqueId}>
      <ProductCard2>
        <ProductInfo2>
          <ProductTitle>{product.name}</ProductTitle>
          <ProductDesc>Number of units: {product.quantity}</ProductDesc>
          <ProductPrice2>Unit price: {product.price} $</ProductPrice2>
        </ProductInfo2>
      </ProductCard2>
    </div>
  ));
};

export default ProductList;
