import React from 'react';
import styled from 'react-emotion';
import { push } from 'gatsby';
// import StoreContext, { defaultStoreContext } from '../../context/StoreContext';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Header from '../header';
import './layout.css';

// const Layout = ({ children }) => (
//   <StaticQuery
//     query={graphql`
//       query SiteTitleQuery {
//         site {
//           siteMetadata {
//             title
//           }
//         }
//       }
//     `}
//     render={data => (
//       <>
//         <Helmet
//           title={data.site.siteMetadata.title}
//           meta={[
//             { name: 'description', content: 'Sample' },
//             { name: 'keywords', content: 'sample, something' }
//           ]}
//         >
//           <html lang="en" />
//         </Helmet>
//         <Header siteTitle={data.site.siteMetadata.title} />
//         <div
//           style={{
//             margin: '0 auto',
//             maxWidth: 960,
//             padding: '0px 1.0875rem 1.45rem',
//             paddingTop: 0
//           }}
//         >
//           {children}
//         </div>
//       </>
//     )}
//   />
// );

// Layout.propTypes = {
//   children: PropTypes.node.isRequired
// };

// export default Layout;

export default class Layout extends React.Component {
  // state = {
  //   store: {
  //     ...defaultStoreContext
  //   }
  // }

  render() {
    return (
      <>
        
        {/*<StoreContext.Provider value={this.state.store}>*/}
          <Header />
          <h1>test</h1>
          <p>https://blog.rousek.name/2018/04/12/statically-generated-ecommerce-using-shopify-and-netlify/</p>
          {this.props.children}
        {/*</StoreContext.Provider>*/}

      </>
    );
  }
}