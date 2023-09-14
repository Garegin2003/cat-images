import React from 'react';
import { Link } from 'react-router-dom';
import { ErrorContainer, ErrorMessage, ErrorNumber } from '../styles/styles';

function ErrorPages() {
  return (
    <ErrorContainer>
      <ErrorNumber>
        <h1>404</h1>
      </ErrorNumber>
      <ErrorMessage>
        <h1>Sorry, Page Not Found</h1>
        <p>The page you requested could not be found</p>
        <Link to={'/'}>Go Back Home</Link>
      </ErrorMessage>
    </ErrorContainer>
  );
}

export default ErrorPages;
