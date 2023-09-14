import React from 'react';
import { StyledLink } from '../styles/styles';

const CategoryItem = ({ id, name }) => {
  return (
    <li>
      <StyledLink to={`/category/${id}`}>{name}</StyledLink>
    </li>
  );
};

export default CategoryItem;
