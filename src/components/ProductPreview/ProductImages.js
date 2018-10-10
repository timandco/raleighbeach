import React from 'react';
// import styled, { css } from 'react-emotion';
// import Image from 'gatsby-image';

export default class ProductImages extends React.Component {
  state = {
    currentImage: 0
  };

  handleImageClick(index) {
    return event => {
      event.preventDefault();
      this.setState({ currentImage: index });
    };
  }

  render() {
    const { alt, images } = this.props;
    const currentImage = images[this.state.currentImage];

    if (!currentImage) {
      return;
    }

    return (
      <>
        {
          images.map((image, index) => {
            return <img src={image.originalSrc} alt={alt} />;
          })
        }
      </>
    );
  }
}
