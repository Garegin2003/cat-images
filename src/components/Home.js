import React, { useEffect, useState } from 'react';
import {
  ImageContainer,
  ImageListWrapper,
  LoadMoreButton,
} from '../styles/styles';
import ImageItem from './ImageItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImages } from '../redux/actions/actions';

const Home = () => {
  const images = useSelector((state) => state.images);
  const [limit, setLimit] = useState(10);
  const dispatch = useDispatch();

  const loadMore = () => {
    setLimit(limit + 10);
  };

  useEffect(() => {
    dispatch(fetchImages(limit));
  }, [dispatch, limit]);

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

export default Home;
