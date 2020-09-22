import { Link, NavLink } from 'react-router-dom'
import theme from '../../styles/Theme';
import styled from 'styled-components';


export const HamburgerMenu = styled.div`
  display: none;
  position: fixed;
  z-index: none;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  z-index: 2;
`;

export const MenuSecondaryBackgroundColor = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background-color: ${theme.colors.black};
  z-index: -1;
`;

export const Container = styled.div`
  width: 90vw;
  margin: 0 auto;
  
`;

export const MenuLayer = styled.div`
  position: relative;
  height: 100%;
  background: ${theme.colors.red};
  overflow: hidden;
`;

export const MenuBackground = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  animation: cameraPan 30s infinite;
  @keyframes cameraPan {
    0%{
      background-position:0% 0%;
    }
    25%{

      background-position:40% 10%;
    }
    50%{

      background-position:0% 10%;
    }
    75%{

      background-position:10% 10%;
    }
    100%{

      background-position:0% 0%;
    }
  }
`;


export const Wrapper = styled.div`
  position: relative;

`;

export const MenuLinks = styled.div`
    position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0px;
  @media (min-width: 640px) and (orientation: landscape)  {
  top: 100px;
  }
  @media (min-width: 1000px) and (orientation: landscape)  {
  top: 150px;
  }
  @media (min-width: 1200px) and (orientation: landscape)  {
  top: 50px;
  }

`;

export const Nav = styled.nav`
  display: block;
`;
export const Ul = styled.ul`
  padding: 0;
  margin: 0;
  @media (min-width: 400px) and (orientation: portrait)  {
    margin-left: 10px;
  }
  @media (min-width: 700px) and (orientation: portrait)  {
    margin-top: 20%;
  }
  @media (min-width: 700px) and (orientation: landscape)  {
    margin-top: 10%;
  }
`;

export const Li = styled.li`
  position: relative;
  list-style: none;
  font-size: 1.5rem;
  font-weight: 700;
  cursor: pointer;
  height: 50px;
  overflow: hidden;
  width: 700px;
  @media (min-width: 700px) and (orientation: portrait)  {
    font-size: 4.5rem;
    height: 100px;
    width: 1000px;
  }
  @media (min-width: 640px) and (orientation: landscape)  {
  width: 200px;
  margin-left: 22%;
  }
  @media (min-width: 700px) and (orientation: landscape)  {
  width: 200px;
  margin-left: 25%;
  }
  @media (min-width: 1024px) and (orientation: landscape)  {
   width: 400px;
  height: 120px;
  margin-left: 15%;
  font-size: 4rem;
  }
  @media (min-width: 1280px) and (orientation: landscape)  {
   width: 500px;
  height: 120px;
  margin-left: 20%;
  font-size: 5rem;
  }
  @media (min-width: 1410px) and (orientation: landscape)  {
   width: 600px;
  height: 135px;
  margin-left: 20%;
  font-size: 5.5rem;
  }

  @media (min-width: 1600px) and (orientation: landscape)  {
   width: 700px;
  height: 135px;
  margin-left: 25%;
  font-size: 6rem;
  }
`;

export const StyledLink = styled(Link)`
  position: absolute;
  text-decoration: none;
  color: ${theme.colors.white};
  &:hover {
    color: ${theme.colors.black};
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;
`;

export const Info = styled.div`
  color: ${theme.colors.white};
  width: 500px;
  @media (min-width: 640px) and (orientation: landscape) {
    width: 250px;
  }
  @media (min-width: 1000px) and (orientation: landscape) {
    margin-right: 5%;
  }
  @media (min-width: 1280px) and (orientation: landscape) {
    margin-right: 10%;
    width: 300px;

  }
  @media (min-width: 1400px) and (orientation: landscape) {
    margin-right: 10%;
    width: 400px;
  }
  @media (min-width: 1600px) and (orientation: landscape) {
    margin-right: 10%;
    width: 500px;
  }
`;

export const H3 = styled.h3`
  font-size: 1.2rem;
  margin: 8px auto;
  @media (min-width: 640px) and (orientation: landscape) {
    font-size: .8rem;
  }
  @media (min-width: 1000px) and (orientation: landscape) {
    font-size: 1.2rem;
  }
`;

export const Paragraph = styled.p`
  margin: 0 auto;
  font-size: 0.8rem;
  @media (min-width: 640px) and (orientation: landscape) {
    font-size: 0.5rem;
  }
  @media (min-width: 640px) and (orientation: landscape) {
    font-size: 0.8rem;
  }
  @media (min-width: 1280px) and (orientation: landscape) {
    font-size: 0.65rem;
  }
  @media (min-width: 1410px) and (orientation: landscape) {
    font-size: 0.8rem;
  }
`;

export const Locations = styled.div`
  position: absolute;
  bottom: -5%;
  color: ${theme.colors.white};
  margin-top: 16px;
  font-size: 0.8rem;
  font-weight: 600;
 font-size: .6rem;
 @media (min-width: 360px) and (orientation: portrait)  {
    font-size: .8rem;
    bottom: -10%;
  };
  @media (min-width: 400px) and (orientation: portrait)  {
    bottom: -20%;
  };
  @media (min-width: 700px) and (orientation: portrait)  {
    font-size: 1.5rem;
    bottom: -30%;
    margin-left: 20px;
  };
  @media (min-width: 500px) and (orientation: landscape) {
    bottom: 30%;
    margin-left: 5px;
  }
  @media (min-width: 640px) and (orientation: landscape) {
    bottom: -40%;
    font-size: 1rem;
    margin-left: 8%;
  }
  @media (min-width: 1000px) and (orientation: landscape) {
    bottom: -30%;
  }
  @media (min-width: 1280px) and (orientation: landscape) {
    font-size: 1.4rem;
    bottom: -25%;
  }
  @media (min-width: 1410px) and (orientation: landscape) {
    font-size: 1.4rem;
    bottom: -30%;
  }
`;

export const Span = styled.span`
  &:first-child {
    margin-left: 5px;
    @media (min-width: 400px) and (orientation: portrait)  {
    margin-left: 15px;
  }
  @media (min-width: 700px) and (orientation: portrait)  {
    margin-left: 30px;
  }
  @media (min-width: 640px) and (orientation: landscape)  {
    margin-left: 30px;
  }
  @media (min-width: 1000px) and (orientation: landscape)  {
    margin-left: 60px;
  }
  }
  cursor: pointer;
  margin: 0 5px;
  transition: 0.3s ease-in-out;
  font-size: 0.5rem;
  @media (min-width: 400px) and (orientation: portrait)  {
    font-size: .6rem;
  }
  @media (min-width: 700px) and (orientation: portrait)  {
    font-size: 1rem;
    margin: 0 15px;
  }
  @media (min-width: 640px) and (orientation: landscape)  {
    font-size: .8rem;
    margin: 0 10px;
  }
  @media (min-width: 1000px) and (orientation: landscape)  {
    font-size: .8rem;
    margin: 0 30px;
  }
  @media (min-width: 1280px) and (orientation: landscape) {
    font-size: 1rem
  }
  &:hover {
    background: ${theme.colors.black};
    padding: 4px 10px;
    border-radius: 4px;
    @media (min-width: 1000px) and (orientation: landscape)  {
      padding: 8px 24px;
  }
  }
`;
