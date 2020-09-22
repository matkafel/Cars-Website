import styled from "styled-components";
import theme from '../../styles/Theme';


export const Container = styled.div`
  position: relative;
  width: 100vw;
  background-color: ${theme.colors.black};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

export const H1 = styled.h1`
    text-align: center;
    margin-top: 100px;
    font-size: 30px;
    font-weight: 700;
    color: ${theme.colors.white};
    margin-bottom: 20px;
    @media (min-width: 760px) and (orientation: portrait)  {
      font-size: 40px;
      margin-bottom:80px;
  } 
  @media (min-width: 1280px) and (orientation: landscape)  {
      font-size: 50px;
      margin-bottom:80px;
  } 
`;

export const ContentWrapper = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    width: 95vw;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    @media (min-width: 760px) and (orientation: portrait)  {
      margin-bottom:50px;
  } 
  @media (min-width: 640px) and (orientation: landscape)  {
      margin-bottom:50px;
  } 
  @media (min-width: 1280px) and (orientation: landscape)  {
      width:85%;
      margin-bottom:100px;
  } 
`;

export const ContentImg = styled.div`
    position: relative;
    display: flex;
    width: 50%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;
export const ContentText = styled.div`
    position: relative;
    width: 50%;
    height: 100%;
`;

export const ImgEngine = styled.img`
    display: block;
    margin: 0 auto;
    width: 100%;
    @media (min-width: 360px) and (orientation: portrait)  {
      width: 90%;
  } 
  @media (min-width: 760px) and (orientation: portrait)  {
      width: 50%;
  } 
  @media (min-width: 500px) and (orientation: landscape)  {
      width: 70%;
  } 
  @media (min-width: 800px) and (orientation: landscape)  {
      width: 50%;
  } 
  @media (min-width: 1280px) and (orientation: landscape)  {
      width: 40%;
  } 
`

export const H3 = styled.h3`
    font-size: 20px;
    color: ${theme.colors.white};
    text-align: center;
    margin-bottom: 5px;
    font-weight: 500;
    @media (min-width: 1280px) and (orientation: landscape)  {
      font-size:30px;
  } 
`;

export const Paragraph = styled.p`
    font-size: 10px;
    line-height:14px;
    text-align: justify;
    color:  ${theme.colors.gray};
    font-weight: 100;
    width: 90%;
    margin: 0 auto;
    @media (min-width: 760px) and (orientation: portrait)  {
        font-size: 12px;
        line-height:20px;
        width: 75%;
  } 
  @media (min-width: 640px) and (orientation: landscape)  {
        font-size: 12px;
        line-height:20px;
        width: 75%;
  } 
  @media (min-width: 1280px) and (orientation: landscape)  {
        font-size: 16px;
        line-height:26px;
        width: 75%;
  } 
`;