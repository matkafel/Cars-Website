import styled from 'styled-components';
import { Link } from 'react-router-dom';
import theme from '../../styles/Theme';

export const Container = styled.div`
  width: 1280px;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  padding: 0 48px;
`;
export const HeaderWrapper = styled.header`
  height: 0px;
`;

export const InnerHeader = styled.div`
  position: relative;
  display: flex;
  z-index: 10;
  height: 50px;
  justify-content: space-between;
  align-items: center;

`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index:3
`;

export const StyledLink = styled(Link)`
  position: fixed;
  font-weight: 900;
  text-decoration: none;
  font-size: 1.3rem;
 color: ${theme.colors.white}; 
  z-index: 3;
  left: 12%;
`;

export const Button = styled.button`
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: ${theme.colors.white};
  z-index: 3;
  right: 14%;
  position: fixed;
`;










