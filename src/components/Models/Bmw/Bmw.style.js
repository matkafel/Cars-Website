import styled from "styled-components";
import theme from '../../../styles/Theme';

import mainBg from '../../../images/Bmw/mainBg.jpg';
import BmwGran from '../../../images/Bmw/SecondSection/BmwGran.jpg';
import BmwGranBack from '../../../images/Bmw/SecondSection/BmwGranBack.jpeg';
import BmwGranFace from '../../../images/Bmw/SecondSection/BmwGranFace.jpg';
import Company from '../../../images/Bmw/SecondSection/Company.jpg';

import Bg1 from '../../../images/Bmw/ModelsBg/bg1.jpg';
import Bg2 from '../../../images/Bmw/ModelsBg/bg2.jpg';
import Bg3 from '../../../images/Bmw/ModelsBg/bg3.jpg';
import Bg4 from '../../../images/Bmw/ModelsBg/bg4.jpg';
import Bg5 from '../../../images/Bmw/ModelsBg/bg5.jpg';
import Bg6 from '../../../images/Bmw/ModelsBg/bg6.jpg';
import Bg7 from '../../../images/Bmw/ModelsBg/bg7.jpg';
import Bg8 from '../../../images/Bmw/ModelsBg/bg8.jpg';


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
  background-position: center;
  background-repeat: no-repeat;
`;

export const MainTitle = styled.h1`
    color: ${theme.colors.white};
    font-size: 2rem;
    font-weight: 500;
    margin-top: 28%;  
    margin-left: 6%;
    margin-bottom: 20px; 
    @media (min-width: 700px) and (orientation: portrait)  {
    font-size: 3.5rem;
    margin-top: 20%;  
    }
    @media (min-width: 500px) and (orientation: landscape)  {
    font-size: 2rem;
    margin-top: 15%;  
    }  
    @media (min-width: 1000px) and (orientation: landscape)  {
    font-size: 4rem;
    }
    @media (min-width: 1200px) and (orientation: landscape)  {
    font-size: 4rem;
    margin-top: 10%;  
    } 
    @media (min-width: 1400px) and (orientation: landscape)  {
    font-size: 5rem;
    margin-top: 10%;  
    }    
`
export const MainSubtitle = styled.p`
    color: ${theme.colors.white};
    font-size: 1.5rem;
    font-weight: 300;
    margin-left: 6%;
    margin-top: -30px;
    padding: 0;
    @media (min-width: 700px) and (orientation: portrait)  {
    font-size: 2rem;
    margin-top: -40px;
    } 
    @media (min-width: 500px) and (orientation: landscape)  {
    font-size: 1rem;
    margin-top: -20px;  
    } 
    @media (min-width: 1000px) and (orientation: landscape)  {
    font-size: 2.5rem;
    margin-top: -40px;  
    } 
    @media (min-width: 1400px) and (orientation: landscape)  {
    font-size: 3rem;
    margin-top: -50px;  
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
    position:relative;
    display: flex;
    width: 100vw;
    height: 100vh;
    flex-wrap: wrap;
    margin-top: 20px;
    @media (min-width: 700px) and (orientation: portrait)  {
    margin-top: 35px
    } 
    @media (min-width: 1000px) and (orientation: landscape)  {
    margin-top: 35px
    } 
`;

export const Bussiness = styled.div`
    position: absolute;
    width: 69%;
    height: 48%;
    top: 0;
    left:0;
    background-image: url(${Company});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;

export const BussinessTitle = styled.h3`
    position: absolute;
    color: ${theme.colors.white};
    font-weight: 700;
    font-size: 1rem;
    right: 10%;
    @media (min-width: 700px) and (orientation: portrait)  {
    font-size: 2rem;
    } 
    @media (min-width: 1000px) and (orientation: landscape)  {
    font-size: 1.5rem;
    } 
    @media (min-width: 1400px) and (orientation: landscape)  {
    font-size: 2rem;
    } 
`;
export const BussinessSubtitle = styled.h3`
    position: absolute;
    color: ${theme.colors.white};
    font-weight: 400;
    right: 10%;
    font-size: 1rem;
    top: 10%;
    @media (min-width: 700px) and (orientation: portrait)  {
    font-size: 1.2rem;
    }
    @media (min-width: 1000px) and (orientation: landscape)  {
    font-size: 1.2rem;
    } 
    @media (min-width: 1400px) and (orientation: landscape)  {
    font-size: 2rem;
    } 
`;

export const BussinessModels = styled.p`
    color: ${theme.colors.white};
    font-weight: 600;
    font-size: 1.5rem;
    text-align: center;
    margin: 33% 25% 0;
    @media (min-width: 400px) and (orientation: portrait)  {
    margin: 45% 25% 0;
    }
    @media (min-width: 700px) and (orientation: portrait)  {
    font-size: 3rem;
    margin: 25% 25% 0;
    }
    @media (min-width: 500px) and (orientation: landscape)  {
    margin: 16% 20% 0;
    }
    @media (min-width: 1000px) and (orientation: landscape)  {
    margin: 15% 25% 0;
    font-size: 3rem;
    }
    @media (min-width: 1400px) and (orientation: landscape)  {
    margin: 10% 25% 0;
    font-size: 3.5rem;
    }  
`

export const GranFace = styled.div`
    position: absolute;
    width: 29%;
    height: 48%;
    background-color: blue;
    top: 0;
    right: 0;
    background-image: url(${BmwGranFace});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;

export const GranBack = styled.div`
    position: absolute;
    width: 29%;
    height: 48%;
    background-color: yellow;
    bottom: 0;
    left: 0;
    background-image: url(${BmwGranBack});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;

export const GranAll = styled.div`
    position: absolute;
    width: 69%;
    height: 48%;
    background-color: green;
    bottom: 0;
    right:0;
    background-image: url(${BmwGran});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;

export const ModelsWrapper = styled.div`
    position: relative;
    width: 100vw;
    height: 400vh;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    @media (min-width: 700px) and (orientation: portrait)  {
    margin-top: 35px
    } 
`;

export const ModelWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 12.5%;
    display: flex;
    flex-direction: column;
    background-color: rgb(238,238,238);
    z-index: 1;
    &:nth-child(even){
        background-color: ${theme.colors.white};
    }
    @media (min-width: 500px) and (orientation: landscape)  {
        flex-direction: row;
    } 
`
export const Model = styled.div`
    position: relative;
    width: 100%;
    height: 50%;
    left: 0;
    border: 1px solid black;
    border-right: none;
    transition:.2s;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    @media (min-width: 500px) and (orientation: landscape)  {
    width: 50%;
    height: 100%;
    } 
`;

export const ModelBg1 = styled(Model)`
    &:hover{
        background-image: url(${Bg1})
    }
`;

export const ModelBg2 = styled(Model)`
    &:hover{
        background-image: url(${Bg2})
    }
`;
export const ModelBg3 = styled(Model)`
    &:hover{
        background-image: url(${Bg3})
    }
`;
export const ModelBg4 = styled(Model)`
    &:hover{
        background-image: url(${Bg4})
    }
`;
export const ModelBg5 = styled(Model)`
    &:hover{
        background-image: url(${Bg5})
    }
`;
export const ModelBg6 = styled(Model)`
    &:hover{
        background-image: url(${Bg6})
    }
`;
export const ModelBg7 = styled(Model)`
    &:hover{
        background-image: url(${Bg7})
    }
`;
export const ModelBg8 = styled(Model)`
    &:hover{
        background-image: url(${Bg8})
    }
`;

export const Img = styled.img`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    @media (min-width: 700px) and (orientation: portrait)  {
   width: 80%;
    }
    @media (min-width: 1000px) and (orientation: landscape)  {
   width: 80%;
    }  
`;

export const Text = styled.div`
    width: 100%;
    height: 50%;
    right: 0;
    border: 1px solid black;
    @media (min-width: 500px) and (orientation: landscape)  {
    width:50%;
    height:100%;
    } 
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 0%;
    @media (min-width: 400px) and (orientation: portrait)  {
    margin-top: 3%;
    } 
    @media (min-width: 700px) and (orientation: landscape)  {
    margin-top: 7%;
    } 
    @media (min-width: 1000px) and (orientation: landscape)  {
    margin-top: 10%;
    } 
    @media (min-width: 1200px) and (orientation: landscape)  {
    margin-top: 12%;
    } 
    @media (min-width: 1400px) and (orientation: landscape)  {
    margin-top: 10%;
    } 
    @media (min-width: 1600px) and (orientation: landscape)  {
    margin-top: 13%;
    } 
`

export const ModelName = styled.h3`
    text-align: center;
    font-weight: 400;
    font-size: 1rem;
    margin-bottom:0;
    @media (min-width: 700px) and (orientation: portrait)  {
    font-size: 2rem;
    } 
    @media (min-width: 1000px) and (orientation: landscape)  {
    font-size: 1.3rem;
    }
    @media (min-width: 1200px) and (orientation: landscape)  {
    font-size: 1.5rem;
    }
    @media (min-width: 1400px) and (orientation: landscape)  {
    font-size: 2rem;
    }  
    @media (min-width: 1600px) and (orientation: landscape)  {
    font-size: 3rem;
    }  
`;
export const ModelDesc = styled.p`
    text-align: center;
    font-size: .6rem;
    font-weight: 300;
    border-bottom: 1px solid black;
    margin-bottom: 5px;
    @media (min-width: 700px) and (orientation: portrait)  {
    font-size: 1.2rem;
    margin-bottom: 15px;
    margin-top: 0;
    }
    @media (min-width: 1000px) and (orientation: landscape)  {
    font-size: 1rem;
    }
    @media (min-width: 1200px) and (orientation: landscape)  {
    font-size: 1.2rem;
    }
    @media (min-width: 1400px) and (orientation: landscape)  {
    font-size: 1.4rem;
    }  
`;
export const ModelEngine = styled.p`
    text-align: center;
    margin-bottom: 0;
    margin-top: 0;
    font-size: .7rem;
    font-weight: 300;
    @media (min-width: 700px) and (orientation: portrait)  {
    font-size: 1rem;
    } 
    @media (min-width: 1000px) and (orientation: landscape)  {
    font-size: 1rem;
    }
    @media (min-width: 1000px) and (orientation: landscape)  {
    font-size: 0.8rem;
    }
    @media (min-width: 1400px) and (orientation: landscape)  {
    font-size: 1.2rem;
    }   
`;

