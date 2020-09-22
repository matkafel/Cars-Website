import styled from "styled-components";
import theme from '../../styles/Theme';



export const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: ${theme.colors.black}; 
  overflow: hidden;
`;

export const PopUp = styled.div`
 position: absolute;
 display: flex;
  width: 90vw;
  height: 70vh;
  background-color: rgba(0,0,0,.6);
  z-index: 10;
justify-content: center;
align-items: center;
margin: 0 auto;
top: 50%;
left: 50%;
z-index: 2;
transform: translate(-50% ,-50%);
@media (min-width: 500px) and (orientation: landscape)  {
    display: none;
  }
`;

export const RotateImg = styled.img`
  width: 100px;
  animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both infinite;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;

  @keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
}

`;

export const Wrapper = styled.div`
/*   padding: 0 48px; */
`;


export const H1 = styled.h1`
    text-align: center;
    margin-top: 80px;
    font-size: 30px;
    font-weight: 700;
    color: ${theme.colors.white};
    @media (min-width: 1000px) and (orientation: landscape)  {
      font-size: 40px;
      margin-bottom:100px;
  } 
    @media (min-width: 1280px) and (orientation: landscape)  {
      margin-top: 100px;
      font-size: 50px;
  } 

`;

export const TestimonialSection = styled.div`
  display: flex;
margin-top: 150px;
  height:10vh;
  justify-content: center;
  align-items: center;
  @media (min-width: 1000px) and (orientation: landscape)  {
    margin-top: 240px;
  } 
/*   Circel */
   &:after{
    content: '';
    position: absolute;
    width: 600px;
    height: 600px;
     background: rgba(255,255,255,.11); 
    border-radius: 100%;
    right: -10%;
    bottom: -10%;
    opacity: 1;
    z-index: 0;
    @media (min-width: 640px) and (orientation: landscape)  {
      width: 500px;
    height: 500px;
  } 
  @media (min-width: 1000px) and (orientation: landscape)  {
      width: 800px;
    height: 800px;
  }
  @media (min-width: 1280px) and (orientation: landscape)  {
    width: 1100px;
    height:1100px;
  }  
  } 
`;

export const TestimonialContainer = styled.div`
  width: 1280px;
  height: 600px;
  position: relative;
  @media (min-width: 1280px) and (orientation: landscape)  {
margin-top: 4%;
  }  
  @media (min-width: 1410px) and (orientation: landscape)  {
margin-top: 8%;
  }
  @media (min-width: 1600px) and (orientation: landscape)  {
margin-top: 15%;
  }
`;

export const ArrowRight = styled.div`
position:absolute;
display:flex;
align-items: center;
justify-content: center;
bottom: 0;
top: -100px;
right: 24%;
cursor: pointer;
border-radius:8px;
transition: 0.3s ease-out;
z-index:1;
@media (min-width: 640px) and (orientation: landscape)  {
    right: 20%;
  }
  @media (min-width: 800px) and (orientation: landscape)  {
    right: 12%;
  }
  @media (min-width: 1200px) and (orientation: landscape)  {
    right: 10%;
    top: -200px;
  }
  @media (min-width: 1400px) and (orientation: landscape)  {
    right: 0;
    top: -200px;
  }
`;

export const Inner = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  height:600px;
  @media (min-width: 1200px) and (orientation: landscape)  {
    height: 500px;
  }
`;

export const TImage = styled.div`
  display:flex;
  width: 500px;
  height: 300px;
  justify-content: left;
  align-items: center;
  &:after{
    content: '';
    position: absolute;
    width: 300px;
    height: 300px;
    background-color: rgb(226, 0, 1);
    left: 150px;
    top: 80px;
    border-radius:100%;
    z-index: 0;
  }
`;

export const UlImage = styled.ul`
  display: flex;
  position: absolute;
  align-items: center;
  height: auto;
  width: 500px;
  top: 100px;
  box-shadow: 0px 0px 40px rgba(0,0,10,.25); 
  overflow: hidden; 
`;

export const LiImage = styled.li`
  height: auto;
  width: 500px;
  z-index: 1;
  left: 0;
  margin-left: -50px;
  margin-right: 100px;

`;

export const ImgImage = styled.img`
  width:520px;
`;

export const TContent = styled.div`
    display:flex;
    width: 500px;
    height: 600px;
    align-items: center;
`
export const UlContent = styled.ul`
  position: absolute;
  width: 500px;
  height: 400px;
  overflow: hidden;
`;

export const LiContent = styled.li`
    width: 500px;
    height: 400px;
    color: white;
    display:flex;
    align-items: center;
    position: absolute;
    opacity: 0;
    &:nth-child(1){
      opacity: 1;
      &:after{
        content: '';
        position: absolute;
        height:12px;
        width: 310px;
        background: 'white';
        opacity: .3;
        left: 0;
        top: 206px;
      }
    }
    &:nth-child(2){
      &:after{
        content: '';
        position: absolute;
        height:12px;
        width: 148px;
        background: 'white';
        opacity: .3;
        left: 54px;
        top: 106px;
      }
    }
    &:nth-child(3){
      &:after{
        content: '';
        position: absolute;
        height:12px;
        width: 28-px;
        background: 'white';
        opacity: .3;
        left: 0;
        top: 166px;
      }
    }
    &:nth-child(4){
      &:after{
        content: '';
        position: absolute;
        height:12px;
        width: 310px;
        background: 'white';
        opacity: .3;
        left: 0;
        top: 206px;
      }
    }
    &:nth-child(5){
      &:after{
        content: '';
        position: absolute;
        height:12px;
        width: 310px;
        background: 'white';
        opacity: .3;
        left: 0;
        top: 206px;
      }
    }
    &:nth-child(6){
      &:after{
        content: '';
        position: absolute;
        height:12px;
        width: 310px;
        background: 'white';
        opacity: .3;
        left: 0;
        top: 206px;
      }
    }
`;

export const ContentInner = styled.div`
  width: 180px;
  margin-left: 0px;
  margin-top: -150px;
  text-align: justify;
 @media (min-width: 640px) and (orientation: landscape)  {
    margin-left: 5%;
  }
  @media (min-width: 800px) and (orientation: landscape)  {
    margin-left: 5%;
    width: 250px;
  }
  @media (min-width: 1200px) and (orientation: landscape)  {
    width: 350px;
  margin-left: 50px;
  }
  @media (min-width: 1400px) and (orientation: landscape)  {
    width: 450px;
  margin-left: 50px;
  }

`

export const Quote = styled.p`
  font-size:8px;
  letter-spacing: 0.9px;
  line-height: 12px;
  font-weight: 300;
  margin-bottom: 10px;
  @media (min-width: 800px) and (orientation: landscape)  {
  font-size: 10px;
  line-height: 16px;
  }
  @media (min-width: 1000px) and (orientation: landscape)  {
  font-size: 12px;
  line-height: 20px;
  }
  @media (min-width: 1200px) and (orientation: landscape)  {
  font-size: 12px;
  line-height: 22px;
  }
  @media (min-width: 1400px) and (orientation: landscape)  {
  font-size: 16px;
  line-height: 24px;
  }
`;

export const Title = styled.h4`
  letter-spacing: 0.9px;
  font-size: 20px;
  color: ${theme.colors.white};
  font-weight: 600;
  margin-bottom: 0;
  @media (min-width: 1000px) and (orientation: landscape)  {
  font-size: 25px;
  }
  @media (min-width: 1200px) and (orientation: landscape)  {
  font-size: 30px;
  }
  @media (min-width: 1400px) and (orientation: landscape)  {
  font-size: 40px;
  }
`;
