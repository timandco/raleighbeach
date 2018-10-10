import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/shared/Layout';
import Store from '../components/Store/Store'

const IndexPage = ({pageContext, location}) => (
  <Layout>
    <Store />
  </Layout>
);

export default IndexPage;
