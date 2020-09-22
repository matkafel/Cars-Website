import styled from "styled-components";
import theme from '../../../styles/Theme';

import mainBg from '../../../images/Mercedes/mainBg.jpg';

import BusinessBg from '../../../images/Mercedes/SecondSection/Business.jpg';
import ConfidenceBg from '../../../images/Mercedes/SecondSection/Confidence.jpg';
import ConfortBg from '../../../images/Mercedes/SecondSection/Confort.jpg';
import LegendBg from '../../../images/Mercedes/SecondSection/Legend.jpg';


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
background-color: ${theme.colors.black};
background-image: url(${mainBg});
height: 100vh;
width: 100vw;
background-size: cover;
background-position: left;
background-repeat: no-repeat;
@media (min-width: 500px) and (orientation: landscape)  {
    background-position: center;
  } 
`;

export const MainTitle = styled.h1`
  color: ${theme.colors.white};
  text-align: center;
  font-size: 2.5rem;
  font-weight: 600;
  margin-left: 10%;
  margin-right: 30%;
  margin-top: 30%;
  display: flex;
  flex-wrap: wrap;
  width: 40%;
  line-height: 40px;
  @media (min-width: 400px) and (orientation: portrait)  {
    font-size: 3rem;
  }  
  @media (min-width: 760px) and (orientation: portrait)  {
    margin-top: 15%;
    font-size: 5rem;
    line-height: 90px;
  }  
  @media (min-width: 500px) and (orientation: landscape)  {
    margin-left: 48%;
    margin-right: 30%;
    margin-top: 18%;
  } 
    @media (min-width: 800px) and (orientation: landscape)  {
    margin-top: 15%;
    font-size:3rem;
    line-height: 50px;
  } 
  @media (min-width: 1000px) and (orientation: landscape)  {
    font-size:5rem;
    line-height: 80px;
  } 
  @media (min-width: 1280px) and (orientation: landscape)  {
    margin-top: 8%;
    font-size:5rem;
    line-height: 120px;
  } 
  @media (min-width: 1410px) and (orientation: landscape)  {
    margin-top: 8%;
    font-size:6rem;
    line-height: 120px;
  } 
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

export const SecondSection = styled.div`
position: relative;
display: flex;
height: 200vh;
width: 100vw;  
flex-wrap: wrap;
margin: 0 auto;
justify-content: center;
align-items: center;
@media (min-width: 500px) and (orientation: landscape)  {
  height: 100vh;
  justify-content: space-evenly;
  } 
`;

export const Bussines = styled.div`
  position: realtive;
  display: flex;
  width: 90%;
  height: 24%;
  background-image: url(${BusinessBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  justify-content: center;
  @media (min-width: 500px) and (orientation: landscape)  {
    width: 45%;
    height: 45%;
  } 
`;

export const Confidence = styled.div`
  position: realtive;
  width: 90%;
  height: 24%;
  background-image: url(${ConfidenceBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media (min-width: 500px) and (orientation: landscape)  {
    width: 45%;
    height: 45%;
  } 
`;

export const Confort = styled.div`
  position: realtive;
  width: 90%;
  height: 24%;
  background-image: url(${ConfortBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media (min-width: 500px) and (orientation: landscape)  {
    width: 45%;
    height: 45%;
  } 
`;

export const Legend = styled.div`
  position: realtive;
  width: 90%;
  height: 24%;
  background-image: url(${LegendBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media (min-width: 500px) and (orientation: landscape)  {
    width: 45%;
    height: 45%;
  } 
`;

export const SecondSectionTitle = styled.h3`
  text-align: center;
  color: ${theme.colors.white};
  font-size: 2rem;
  font-weight: 400;
  text-transform: uppercase;
  margin-top: 50%;
  @media (min-width: 360px) and (orientation: portrait)  {
    margin-top: 60%;
  }
  @media (min-width: 400px) and (orientation: portrait)  {
    margin-top: 65%;
    margin-left: 20px;
    margin-right: 20px;
  } 
  @media (min-width: 760px) and (orientation: portrait)  {
    margin-top: 55%;
    margin-left: 20px;
    margin-right: 20px;
    font-size: 2.5rem;
  } 
  @media (min-width: 500px) and (orientation: landscape)  {
   margin-top: 45%;
   font-size: 1rem;
   margin-left: 20px;
    margin-right: 20px;
  }     
  @media (min-width: 800px) and (orientation: landscape)  {
   margin-top: 40%;
  }   
  @media (min-width: 1000px) and (orientation: landscape)  {
   margin-top: 60%;
   font-size: 2rem;
  }    
  @media (min-width: 1280px) and (orientation: landscape)  {
   margin-top: 50%;
   font-size: 2.5rem;
  } 
  @media (min-width: 1410px) and (orientation: landscape)  {
   margin-top: 40%;
   font-size: 3rem;
  } 
`;

export const ModelsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  height: 300vh;
  @media (min-width: 500px) and (orientation: landscape)  {
    height:250vh;
  } 
  @media (min-width: 1000px) and (orientation: landscape)  {
    height: 100vh;
  } 
`;

export const Model = styled.div`
  width: 100%;
  height: 11%;
background: linear-gradient(to left, #ece9e6, #ffffff);
  border: 1px solid rgb(112,112,112);
  &:nth-child(even){
      background: linear-gradient(to right, #ece9e6, #ffffff);
}
@media (min-width: 500px) and (orientation: landscape)  {
  width: 49.6%;
    height: 20%;
  } 
  @media (min-width: 1000px) and (orientation: landscape)  {
  width: 33%;
    height: 33.3%;
  } 
`;

export const Img = styled.img`
    display: block;
    margin: 0 auto;
    width: 70%;
    @media (min-width: 500px) and (orientation: landscape)  {
  width: 90%;
  } 
  @media (min-width: 800px) and (orientation: landscape)  {
   width: 70%;
  }  
  @media (min-width: 1000px) and (orientation: landscape)  {
   width: 80%;
  }    
  @media (min-width: 1280px) and (orientation: landscape)  {
   width: 65%;
  }    
`;


