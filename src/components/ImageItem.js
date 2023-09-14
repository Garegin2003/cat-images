import React from 'react';
import { ImageListItem } from '../styles/styles';

const ImageItem = ({ url }) => {
  return (
    <ImageListItem>
      <img src={url} alt="Cat" loading="lazy" />
    </ImageListItem>
  );
};

export default ImageItem;
