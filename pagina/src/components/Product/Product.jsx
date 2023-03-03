import React from 'react';
import Modals from '../POPUP/popup';
import './Product.css';

const Product = ({ customClassName, productName, photoURL, price }) => {
  const discountPrice = price * 0.95;
  const installmentPrice = discountPrice / 2;

  return (
    <article className={`product-card ${customClassName}`}>
      <img src={photoURL} alt="Product" />
      <h3>{productName}</h3>
      <div className="product-price-details">
        <dl>
          <dt className="visually-hidden">Old price:</dt>
          <dd><s>{`R$${price}`}</s></dd>
          <dt className="visually-hidden">Price with discounts:</dt>
          <dd><strong>{`R$${discountPrice}`}</strong></dd>
        </dl>
        <small>{`ou 2x de R$ ${installmentPrice} sem juros`}</small>
        <p>Frete grátis</p>
      </div>
      <Modals />
    </article>
  );
};

export default Product;

