import styled from "styled-components";
import theme from '../../../styles/Theme';

import MainBg from '../../../images/Jeep/main.jpg';
import AllModlesBg from '../../../images/Jeep/allModel.jpg';
import BreakBoundariesBg from '../../../images/Jeep/off.jpg';


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
  background-image: url(${MainBg});
  height: 100vh;
  width: 100vw;
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
`;

export const MainTitle = styled.h1`
    position: absolute;
    display:flex;
    flex-wrap: wrap;
    text-align: left;
    color: ${theme.colors.white};
    font-size: 3rem;
    bottom: 0;
    left: 0;
    width: 30%;
    line-height: 40px;
    @media (min-width: 400px) and (orientation: portrait)  {
    font-size: 4rem;
    line-height: 60px;
    }
    @media (min-width: 700px) and (orientation: portrait)  {
    font-size: 5rem;
    line-height: 80px;
    } 
    @media (min-width: 800px) and (orientation: landscape)  {
    font-size: 4rem;
    line-height: 60px;
    }
    @media (min-width: 1000px) and (orientation: landscape)  {
    font-size: 6rem;
    line-height: 80px;
    }
    @media (min-width: 1000px) and (orientation: landscape)  {
    font-size: 8rem;
    line-height: 120px;
    }
`;

export const AllModels = styled.div`
    width: 100vw;
    height:50vh;
    margin-top: 20px;
    margin-bottom: 20px;
    background-image: url(${AllModlesBg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;

export const AllModelsTitle = styled.h2`
    font-size: 1.4rem;
    text-align: center;
    color: ${theme.colors.white};
    margin-top: 5%;
    font-weight: 500;
    @media (min-width: 400px) and (orientation: portrait)  {
    font-size: 1.8rem;
  } 
  @media (min-width: 400px) and (orientation: portrait)  {
    font-size: 3rem;
  }
  @media (min-width: 500px) and (orientation: landscape) {
   margin-top: 3%;
  }
  @media (min-width: 800px) and (orientation: landscape)  {
    font-size: 2rem;
    margin-top: 2%;
    } 
    @media (min-width: 1000px) and (orientation: landscape)  {
    font-size: 2.5rem;
    margin-top: 2%;
    }  
    @media (min-width: 1400px) and (orientation: landscape)  {
    font-size: 3rem;
    margin-top: 2%;
    }    
`;

export const ModelsWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    height: 200vh;
    width: 100vw;
    @media (min-width: 360px) and (orientation: portrait)  {
    height: 150vh;
  }
  @media (min-width: 500px) and (orientation: landscape)  {
    height: 250vh;
  }  
`;

export const Model = styled.div`
    display: flex;
    width: 100%;
    height: 40vh;
    background-color: rgb(54,66,89);
    &:nth-child(2){
        background-color: rgb(208,208,206);
        flex-direction: row-reverse;
    };
    &:nth-child(3){
        background-color: rgb(54,66,89);
    };
    &:nth-child(4){
        background-color: rgb(101,101,101);
        flex-direction: row-reverse;
    };
    &:nth-child(5){
        background-color: rgb(178,0,0);
    }
    @media (min-width: 360px) and (orientation: portrait)  {
    height: 30vh;
  }
  @media (min-width: 500px) and (orientation: landscape)  {
    height: 50vh;
  }  
`;

export const ModelText = styled.div`
    width: 50%;
    height: 100%;
    box-sizing: border-box;
`;

export const ModelTextTitle = styled.h3`
    text-align: center;
    color: ${theme.colors.white};
    font-weight: 700;
    font-size: 1rem;
    text-transform: uppercase;
    margin-bottom: 0;
    margin-top: 35%;
    @media (min-width: 700px) and (orientation: portrait)  {
    font-size: 1.5rem;
    margin-top: 25%;
  } 
  @media (min-width: 500px) and (orientation: landscape)  {
    margin-top: 15%;
  } 
  @media (min-width: 800px) and (orientation: landscape)  {
    font-size: 1.5rem;
    margin-top: 13%;
    } 
    @media (min-width: 1000px) and (orientation: landscape)  {
    font-size: 2.5rem;
    margin-top: 20%;
    }
    @media (min-width: 1200px) and (orientation: landscape)  {
    font-size: 2.5rem;
    margin-top: 14%;
    }  
    @media (min-width: 1400px) and (orientation: landscape)  {
    font-size: 3rem;
    margin-top: 14%;
    }   
`;

export const ModelTextDesc = styled.h3`
    text-align: center;
    color: ${theme.colors.white};
    font-weight: 400;
    font-size: .8rem;
    margin-top: 0;
    @media (min-width: 700px) and (orientation: portrait)  {
    font-size: 1rem;
  } 
  @media (min-width: 800px) and (orientation: landscape)  {
    font-size: 1rem;
    }
    @media (min-width: 1000px) and (orientation: landscape)  {
    font-size: 1.2rem;
    }   
    @media (min-width: 1400px) and (orientation: landscape)  {
    font-size: 1.5rem;
    }   
`

export const ModelImg = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    margin: 0 auto;
    align-items: center;
    background-color: white;
`;
export const Img = styled.img`
width: 80%;
margin: 0 auto;
@media (min-width: 500px) and (orientation: landscape)  {
    width: 60%;
  } 
  @media (min-width: 500px) and (orientation: landscape)  {
    width: 70%;
  } 
  @media (min-width: 1280px) and (orientation: landscape)  {
    width: 50%;
  } 
`;

export const BreakBoundaries = styled.div`
    width: 100vw;
    height:50vh;
    margin-top: 20px;
    margin-bottom: 20px;
    background-image: url(${BreakBoundariesBg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;

export const BreakBoundariesTitle = styled.h2`
    font-size: 2.5rem;
    text-align: center;
    color: ${theme.colors.white};
    font-weight: 700;
    margin-top: 25%;
    @media (min-width: 400px) and (orientation: portrait)  {
    font-size: 3rem;
    margin-top: 30%;
  } 
  @media (min-width: 500px) and (orientation: landscape)  {
    font-size: 2rem;
    margin-top: 10%;
  } 
  @media (min-width: 1000px) and (orientation: landscape)  {
    font-size: 4rem;
    margin-top: 13%;
  } 
  @media (min-width: 1280px) and (orientation: landscape)  {
    margin-top: 10%;
  } 
  @media (min-width: 1400px) and (orientation: landscape)  {
    margin-top: 8%;
    font-size: 5rem;
  } 
`;



