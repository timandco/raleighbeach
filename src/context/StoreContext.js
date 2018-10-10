import React from 'react';
import Client from 'shopify-buy';

const client = Client.buildClient({
  domain: 'raleigh-beach.myshopify.com',
  storefrontAccessToken: 'ff7a548d70adb92fc0dbdf4f161e6ca2'
});

export const defaultStoreContext = {
  client,
  isCartOpen: false,
  checkout: { lineItems: [] },
  products: [],
  shop: {},
  addVariantToCart: () => {},
  removeLineItem: () => {},
  updateQuantity: () => {},
  toggleCart: () => {}
};

const StoreContext = React.createContext(defaultStoreContext);

export const withStoreContext = (Component) => {
  return (props) => (
    <StoreContext.Consumer>
      {context => <Component {...props} storeContext={context} />}
    </StoreContext.Consumer>
  )
};

export default StoreContext;
