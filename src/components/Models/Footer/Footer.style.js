import styled from "styled-components";
import theme from '../../../styles/Theme';

export const FooterWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content:space-around;
    align-items:center;
    width: 100vw;
    height: 10vh;
    background-color: ${theme.colors.black};
    border-top: 2px solid black;
    @media (min-width: 500px) and (orientation: landscape) {
    height: 15vh;
    }
`;

export const ImgBrandLogo = styled.img`
    width: 30px;
    height: 20px;
    @media (min-width: 700px) and (orientation: portrait) {
      width: 60px;
    height: 40px;
    }
    @media (min-width: 700px) and (orientation: landscape) {
      width: 45px;
    height: 30px;
    }
    @media (min-width: 1000px) and (orientation: landscape) {
      width: 80px;
    height: 50px;
    }
    @media (min-width: 1400px) and (orientation: landscape) {
      width: 110px;
    height: 70px;
    }
`