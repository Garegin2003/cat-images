import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';
import { fetchImagesByCategory } from '../redux/actions/actions';
import {
  ImageContainer,
  ImageListWrapper,
  LoadMoreButton,
} from '../styles/styles';
import ImageItem from './ImageItem';

const ImageList = () => {
  const dispatch = useDispatch();
  const images = useSelector((state) => state.images);
  const { categoryId } = useParams();
  let [limit, setLimit] = useState(10);

  const loadMore = () => {
    setLimit((limit += 10));
    dispatch(fetchImagesByCategory(categoryId, limit));
  };

  useEffect(() => {
    dispatch(fetchImagesByCategory(categoryId));
  }, [dispatch, categoryId]);

  return (
    <ImageContainer>
      <ImageListWrapper>
        {images.map((image) => (
          <ImageItem key={image.id} url={image.url} />
        ))}
      </ImageListWrapper>
      <LoadMoreButton onClick={loadMore}>Load More</LoadMoreButton>
    </ImageContainer>
  );
};

export default ImageList;
