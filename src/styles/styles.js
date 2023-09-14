import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CategoryContainer = styled.nav`
  text-align: center;
  height: 60px;
  background: rgba(0, 79, 157, 0.8);
  backdrop-filter: saturate(180%) blur(20px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  @media (max-width: 1024px) {
    max-width: 1024px;
    padding: 0;
  }
`;

export const CategoryListWrapper = styled.ul`
  list-style: none;
  padding: 0;
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 150px;
  @media (max-width: 1024px) {
    gap: 50px;
  }
  @media (max-width: 786px) {
    gap: 30px;
    width: 50%;
  }
  @media (max-width: 320px) {
    gap: 15px;
    width: 30%;
  }
`;

export const CategoryListItem = styled.li`
  cursor: pointer;
  margin: 10px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #eee;
  letter-spacing: 3px;
  font-weight: lighter;
  font-size: 24px;
  @media (max-width: 320px) {
    font-size: 13px;
    letter-spacing: 0px;
  }
`;

export const ImageContainer = styled.div`
  text-align: center;
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
`;

export const ImageListWrapper = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  height: 700px;
  overflow: auto;
  border: solid rgba(0, 79, 157, 0.8);
  border-radius: 50px;
`;

export const ImageListItem = styled.li`
  margin: 10px;

  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
  }
`;

export const LoadMoreButton = styled.button`
  padding: 10px 30px;
  text-decoration: none;
  color: #eee;
  background: rgba(0, 79, 157, 0.8);
  cursor: pointer;
  transition: background 0.3s ease; // Add a smooth transition
  border: none;

  &:hover {
    background: rgba(0, 79, 157, 1); // Change the background color on hover
  }
`;

export const ErrorContainer = styled.div`
  color: #d9d9d9;
  background-color: #ffffff;
  margin-top: 80px;
  margin-bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const ErrorNumber = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  h1 {
    font-size: 21.875rem;
    width: 597px;
    line-height: 0.9;
    margin: 0 auto;
    font-weight: 400;
    color: rgba(0, 79, 157, 0.8);
  }
`;

export const ErrorMessage = styled.div`
  min-height: 550px;
  padding: 50px 0;
  background-color: #7c9aff;
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;

  h1 {
    font-size: 4.75rem;
    font-weight: 400;
    text-transform: none;
    margin: 0 70px;
    line-height: 1.1;
    color: white;
  }
  p {
    font-size: 1.5rem;
    letter-spacing: 1px;
    font-style: normal;
    font-weight: 600;
    width: 735px;
    text-transform: none;
    margin: 16px auto 0;
    color: white;
  }
  a {
    letter-spacing: 1px;
    text-shadow: 0 0 0 rgb(0 0 0 / 0%);
    font-size: 1.25rem;
    border-style: none;
    text-transform: uppercase;
    font-weight: 600;
    margin: 48px auto 0;
    padding: 17px 81px 19px 79px;
    background-color: rgba(0, 79, 157, 0.8);
    color: #ffffff;
    text-decoration: none;
    border-radius: 50px;
  }
`;
