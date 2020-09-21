import styled from "styled-components";
import theme from '../../../styles/Theme';

import audiMain from '../../../images/Audi/audi-main.jpg';
import audiInterior from '../../../images/Audi/audi-interior.jpg';



export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    @media (min-width: 500px) and (orientation: landscape)  {
    overflow: hidden;
    }
`;

export const Main = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  background-image: url(${audiMain});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const IconScroll = styled.div`
  position: absolute;
  left: 52%;
  width: 30px;
  height: 60px;
  margin-left: -20px;
  top: 95%;
  margin-top: -35px;
  box-shadow: inset 0 0 0 1px #fff;
  border-radius: 25px;
  &:before{
  position: absolute;
  left: 50%;
  content: '';
  width: 8px;
  height: 8px;
  background: #fff;
  margin-left: -4px;
  top: 8px;
  border-radius: 4px;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-name: scroll;

  @keyframes scroll{
    0%{
    opacity: 1;
    }
  100%{
    opacity: 0;
    transform: translateY(46px);
    }
    }
  } 
`


export const MainText = styled.div`
    margin-top: 40%;
    margin-left: 12.5%;
    @media (min-width: 760px) and (orientation: portrait)  {
    margin-top: 20%;
    }
    @media (min-width: 500px) and (orientation: landscape)  {
        margin-top: 20%;
    }
    @media (min-width: 1000px) and (orientation: landscape)  {
        margin-top: 15%;
    }
    @media (min-width: 1280px) and (orientation: landscape)  {
        margin-top: 8%;
    }
`

export const MainTitle = styled.h2`
    color: ${theme.colors.white};
    font-weight: 600;
    font-size: 2rem;
    margin:-20px;
    @media (min-width: 360px) and (orientation: portrait)  {
    font-size: 2.5rem;
    }
    @media (min-width: 760px) and (orientation: portrait)  {
    font-size: 4rem;
    }
    @media (min-width: 1000px) and (orientation: landscape)  {
    font-size: 4rem;
    }
    @media (min-width: 1280px) and (orientation: landscape)  {
    font-size: 5rem;
    }
    @media (min-width: 1410px) and (orientation: landscape)  {
    font-size: 6rem;
    }
`;


export const Interior = styled.div`
 position: relative;
  height: 100vh;
  width: 100vw;
  background-image: url(${audiInterior});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; 
`;

export const ModelsWrapper = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    width: 100vw;
    height: 80vh;
    @media (min-width: 400px) and (orientation: portrait)  {
    height: 70vh;
    }
    @media (min-width: 500px) and (orientation: landscape)  {
    height: 100vh;
    }
`

export const Mobility = styled.div`
    position: realtive;
    width: 50%;
    height: 50%;
    top: 0;
    left: 0;
    background-color: ${theme.colors.white};
`;

export const Business = styled.div`
    position: realtive;
    width: 50%;
    height: 50%;
    background-color: ${theme.colors.gray};
    top: 0;
    right: 0;
`

export const Sport = styled.div`
    position: realtive;
    width: 50%;
    height: 50%;
    bottom: 0;
    left: 0;
    background-color: rgba(163,18,25,1);
`;

export const Convenience = styled.div`
    position: realtive;
    width: 50%;
    height: 50%;
    background-color: ${theme.colors.white};
    bottom: 0;
    right: 0;
`
export const Title = styled.h3`
    margin-top: 40px;
    text-align: center;
    font-size: 20px;
    @media (min-width: 1000px) and (orientation: landscape)  {
    font-size:25px
    }
`;

export const ImgCar = styled.img`
    display: block;
    margin: 0 auto;
    width: 70%;
    @media (min-width: 400px) and (orientation: portrait)  {
    width: 90%;
    }
    @media (min-width: 500px) and (orientation: landscape)  {
    width: 50%;
    }
    @media (min-width: 1000px) and (orientation: landscape)  {
    width: 80%;
    }
`;