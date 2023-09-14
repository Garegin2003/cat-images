import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../redux/actions/actions';
import { CategoryContainer, CategoryListWrapper } from '../styles/styles';
import CategoryItem from './CategoryItem';

const CategoryList = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <CategoryContainer>
      <CategoryListWrapper>
        {categories.map((category) => (
          <CategoryItem
            key={category.id}
            id={category.id}
            name={category.name}
          />
        ))}
      </CategoryListWrapper>
    </CategoryContainer>
  );
};

export default CategoryList;
