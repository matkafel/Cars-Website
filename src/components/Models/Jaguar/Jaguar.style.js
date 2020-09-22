import styled from "styled-components";
import theme from '../../../styles/Theme';
import MainBg from '../../../images/Jaguar/main.jpg';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    @media (min-width: 500px) and (orientation: landscape) {
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
    text-align: right;
    color: ${theme.colors.white};
    font-size: 4rem;
    top: 58%;
    right: 0;
    width: 80%;
    margin-right: 1.5%;
    line-height: 60px;
    @media (min-width: 360px) and (orientation: portrait) {
    top: 65%;
  }
  @media (min-width: 400px) and (orientation: portrait) {
    top: 69%;
  }
  @media (min-width: 760px) and (orientation: portrait) {
    top: 57%;
    font-size: 8rem;
    line-height: 120px;
  }  
   @media (min-width: 500px) and (orientation: landscape) {
       width: 33%;
    top: 45%;
    font-size: 3rem;
    line-height: 50px;
  }
  @media (min-width: 640px) and (orientation: landscape) {
      width: 36%;
    top: 40%;
    font-size: 4rem;
    line-height: 60px;
  } 
  @media (min-width: 800px) and (orientation: landscape) {
    width: 35%;
    top: 32%;
    font-size: 5rem;
    line-height: 70px;
  } 
  @media (min-width: 1024px) and (orientation: landscape) {
    width: 45%;
    top: 35%;
    font-size: 8rem;
    line-height: 120px;
  } 
  @media (min-width: 1200px) and (orientation: landscape) {
    width: 45%;
    top: 40%;
    font-size: 8rem;
    line-height: 120px;
  } 
  @media (min-width: 1400px) and (orientation: landscape) {
    width: 40%;
    top: 40%;
    font-size: 10rem;
    line-height: 140px;
  }   
  @media (min-width: 1600px) and (orientation: landscape) {
    width: 30%;
    top: 45%;
    font-size: 10rem;
    line-height: 140px;
  }                  
`;

export const SecondSection = styled.div`
    position: relative;
    display: flex;
    width: 100vw;
    height: 50vh;
    @media (min-width: 360px) and (orientation: portrait) {
    height: 40vh;
  }  
`;

export const TextSection = styled.div`
    width: 50%;
    text-align: left;
    color: ${theme.colors.black};
`
export const TextSectionTitle = styled.h3`
    font-size: 1rem;
    width: 70%;
    margin: 12% auto 0;
    font-weight: 500;
    margin-bottom: 15px;
    text-align: center;
    @media (min-width: 400px) and (orientation: portrait) {
    font-size: 1.2rem;
  }   
  @media (min-width: 760px) and (orientation: portrait) {
font-size: 2rem;
  } 
  @media (min-width: 640px) and (orientation: landscape) {
    margin: 10% auto 15px;
  }
  @media (min-width: 800px) and (orientation: landscape) {
    font-size: 1.5rem;
  }
  @media (min-width: 1024px) and (orientation: landscape) {
    font-size: 2rem;
  } 
  @media (min-width: 1200px) and (orientation: landscape) {
    font-size: 1.5rem;
    margin: 18% auto 15px;
  } 
  @media (min-width: 1600px) and (orientation: landscape) {
    font-size: 2rem;
  }          
`
export const TextSectionContent = styled.p`
    font-size: .5rem;
    width: 70%;
    margin: 0 auto;
    text-align: justify;
    font-weight: 300;
    @media (min-width: 400px) and (orientation: portrait) {
    font-size: .65rem;
  } 
  @media (min-width: 760px) and (orientation: portrait) {
   font-size: 1rem;
  } 
  @media (min-width: 640px) and (orientation: landscape) {
   font-size: .6rem;
  } 
  @media (min-width: 800px) and (orientation: landscape) {
    font-size: .7rem;
  }
  @media (min-width: 800px) and (orientation: landscape) {
    font-size: 1rem;
  } 
  @media (min-width: 800px) and (orientation: landscape) {
    width: 60%;
    font-size:1.2rem;
  }  
  @media (min-width: 1280px) and (orientation: landscape) {
    width: 60%;
    font-size:0.8rem;
  }      
`

export const LogoSection = styled.div`
    width: 50%;
    right: 0;
`
export const LogoImg = styled.img`
    margin: 40% auto;
    width: 100%;
    @media (min-width: 760px) and (orientation: portrait) {
    margin: 20% auto;
  } 
  @media (min-width: 500px) and (orientation: landscape) {
    margin: 0 auto;
  }
  @media (min-width: 1024px) and (orientation: landscape) {
    margin: 5% auto;
  } 
  @media (min-width: 1200px) and (orientation: landscape) {
    margin: 5% auto;
    width: 80%;
  }   
  @media (min-width: 1400px) and (orientation: landscape) {
    margin: 0 auto;
    width: 90%;
  }   
`;

export const ModelsWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: auto;    
`;

export const Model = styled.div`
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 40vh;
    background-color: rgb(7,30,139);
    box-sizing: border-box;
    &:nth-of-type(2){
        background-color: rgb(133,4,13);
    }
    &:nth-of-type(3){
        background-color: rgb(165,163,156);
    }
    &:nth-of-type(4){
        background-color: rgb(44,67,70);
    }
    &:nth-of-type(5){
        background-color: rgb(234,147,79);
    }
    &:nth-of-type(6){
        background-color: rgb(189,1,1);
    }
    &:nth-of-type(7){
        background-color: rgb(110,112,109);
    }
    @media (min-width: 640px) and (orientation: landscape) {
    height: 50vh;
  }
`;

export const ModelText = styled.div`
    text-align: left;
    width: 35%;
    color: ${theme.colors.white};
    padding: 0 0px 30px 20px;
    @media (min-width: 760px) and (orientation: portrait) {
        padding: 0 0px 30px 70px;
  } 
  @media (min-width: 640px) and (orientation: landscape) {
        padding: 0 0px 30px 55px;
  } 
  @media (min-width: 1000px) and (orientation: landscape) {
        padding: 0px 0px 30px 90px;
  }
  @media (min-width: 1400px) and (orientation: landscape) {
        padding: 0 0px 30px 200px;
  }  
`;

export const TextTitle = styled.h3`
    font-size: 1rem;
    text-transform: uppercase;
    margin-bottom: 0;
    font-weight: 500;
    @media (min-width: 400px) and (orientation: portrait) {
    font-size: 1.2rem;
  }
  @media (min-width: 760px) and (orientation: portrait) {
    font-size: 2rem;
  } 
  @media (min-width: 640px) and (orientation: landscape) {
    font-size: 1.2rem;
  }  
  @media (min-width: 1000px) and (orientation: landscape) {
        font-size: 2rem;
  }
  @media (min-width: 1200px) and (orientation: landscape) {
        font-size: 1.5rem;
  }
  @media (min-width: 1400px) and (orientation: landscape) {
        font-size: 2rem;
  }     
  @media (min-width: 1600px) and (orientation: landscape) {
        font-size: 2.5rem;
  }   
`;

export const TextContent = styled.p`
    font-size:.5rem;
    width: 80%;
    margin-top: 0;
    font-weight: 300;
    @media (min-width: 400px) and (orientation: portrait) {
    font-size: .6rem;
  }  
  @media (min-width: 760px) and (orientation: portrait) {
    font-size: 1rem;
  } 
  @media (min-width: 640px) and (orientation: landscape) {
    font-size: .7rem;
  }
  @media (min-width: 1000px) and (orientation: landscape) {
    font-size: .8rem;
  }  
  @media (min-width: 1200px) and (orientation: landscape) {
    font-size: .7rem;
  }  
  @media (min-width: 1400px) and (orientation: landscape) {
    font-size: .8rem;
  } 
  @media (min-width: 1600px) and (orientation: landscape) {
    font-size: 1rem;
  } 
`
export const ModelImg = styled.img`
    display: block;
    margin: 0 auto;
    width: 50%;
    @media (min-width: 1400px) and (orientation: landscape) {
    width: 35%;
  } 
`;
