import React from 'react';
import CategoryList from '../components/CategoryList';
import { Outlet } from 'react-router-dom';

const HomeWrapper = () => {
  return (
    <>
      <CategoryList />
      <Outlet />
    </>
  );
};

export default HomeWrapper;
