import React from 'react';
import styled from 'react-emotion';
import ProductImages from './ProductImages';

const Preview = styled('div')`
  display: inline-block;
  margin-bottom: 3rem;
  width: 100%;

  @media (min-width: 480px) {
    margin-left: 6%;
    width: 47%;

    :nth-child(2n + 1) {
      margin-left: 0;
    }
  }

  @media (min-width: 650px) {
    margin-left: 5%;
    width: 30%;

    :nth-child(2n + 1) {
      margin-left: 5%;
    }

    :nth-child(3n + 1) {
      margin-left: 0;
    }
  }
`;

const Name = styled('h3')`
  color: #000;
  font-family: sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  margin: 1rem 0 0;

  @media (min-width: 650px) {
    font-size: 1.25rem;
  }
`;

const Description = styled('p')`
  color: purple;
  font-weight: 300;
  margin-top: 0.25rem;

  @media (min-width: 650px) {
    font-size: 0.875rem;
    min-height: 115px;
  }
`;

const Price = styled('p')`
  color: purple;
  font-family: sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 0;

  @media (min-width: 650px) {
    font-size: 1.25rem;
  }
`;

export default ({ product }) => (
  <Preview>
    <ProductImages images={product.images} alt={product.title} />
    <Name>{product.title}</Name>
    {/*<Price>USD ${product.variants[0].price}</Price>*/}
    <Description>{product.description}</Description>
    {/*<AddToCart productId={product.id} variants={product.variants} />*/}
  </Preview>
);