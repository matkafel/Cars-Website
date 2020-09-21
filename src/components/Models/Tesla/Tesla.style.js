import styled from "styled-components";

import Bg3 from '../../../images/Tesla/3.jpg';
import BgS from '../../../images/Tesla/S.jpg';
import BgX from '../../../images/Tesla/X.jpg';
import BgY from '../../../images/Tesla/Y.jpg';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width: 100vw;
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
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 4rem;
    margin-top: 15%;
    font-weight: 400;
    @media (min-width: 500px) and (orientation: landscape)  {
    margin-top: 5%;
  } 
`;

export const Model3 = styled.div`
  position: relative;
  background-image: url(${Bg3});
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const ModelY = styled.div`
  position: relative;
  background-image: url(${BgY});
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const ModelX = styled.div`
  position: relative;
  background-image: url(${BgX});
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const ModelS = styled.div`
  position: relative;
  background-image: url(${BgS});
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;