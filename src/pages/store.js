import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/shared/Layout';
import Store from '../components/Store/Store'

const IndexPage = ({pageContext, location}) => (
  <Layout>
    <Store />
     <p>https://blog.rousek.name/2018/04/12/statically-generated-ecommerce-using-shopify-and-netlify/</p>
  </Layout>
);

export default IndexPage;
