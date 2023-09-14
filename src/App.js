import React, { Suspense, lazy } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';

const ImageList = lazy(() => import('./components/ImageList'));
const HomeWrapper = lazy(() => import('./pages/HomeWrapper'));
const ErrorPages = lazy(() => import('./pages/ErrorPage'));

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading Home...</div>}>
              <HomeWrapper />
            </Suspense>
          }
        >
          <Route index element={<Home />} />
          <Route
            path="category/:categoryId"
            element={
              <Suspense fallback={<div>Loading Category...</div>}>
                <ImageList />
              </Suspense>
            }
          />
        </Route>
        <Route
          path="*"
          element={
            <Suspense>
              <ErrorPages />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
