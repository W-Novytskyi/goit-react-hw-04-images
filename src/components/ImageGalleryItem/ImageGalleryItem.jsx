import React from 'react';
import { GalleryItem, Image } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  tags,
  toggleModal,
}) => {
  return (
    <GalleryItem>
      <Image
        src={webformatURL}
        alt={tags}
        onClick={() => toggleModal(largeImageURL)}
      />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
