import styled from "styled-components";
import theme from '../../styles/Theme';


export const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: ${theme.colors.black};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
`;

export const Wrapper = styled.div`
    width: 90%;
    height: 90%;
    background-color: ${theme.colors.red};
    margin: 5% auto 0;
    @media (min-width: 500px) and (orientation: landscape)  {
    margin: 3% auto 0%;
    height: 85%;
    }
    @media (min-width: 800px) and (orientation: landscape)  {
    margin: 4% auto 0%;
    height: 83%;
    }
    @media (min-width: 1000px) and (orientation: landscape)  {
    margin: 4% auto 0%;
    height: 88%;
    }
    @media (min-width: 1400px) and (orientation: landscape)  {
    margin: 2% auto 1%;
    height: 90%;
    }
`

export const Flex = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    @media (min-width: 500px) and (orientation: landscape)  {
    flex-direction: row;
    }
`
export const FlexImage = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50%;
    @media (min-width: 500px) and (orientation: landscape)  {
    height: 100%;
    width: 50%;
    }
`;

export const Img = styled.img`
    width: 80%;
    height: 80%;
    margin-top: 25%;
    @media (min-width: 800px) and (orientation: landscape)  {
    margin-top: 0;
    width: 90%;
    height: 90%;
    }
    @media (min-width: 1400px) and (orientation: landscape)  {
    width: 80%;
    height: 80%;
    margin-left: 10%;
    }
`;

export const FlexText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 50%;
    @media (min-width: 500px) and (orientation: landscape)  {
    height: 100%;
    width: 50%;
    }
    @media (min-width: 1000px) and (orientation: landscape)  {
    width: 50%;
    }
    @media (min-width: 1200px) and (orientation: landscape)  {
    width: 40%;
    }
    @media (min-width: 1400px) and (orientation: landscape)  {
    width: 30%;
    }
`;

export const H2 = styled.h2`
  margin: 0 100px 20px;
    text-align: center;
    color: ${theme.colors.white};
    font-family: 'Libre Baskerville', serif;
    font-weight: 700;
    font-size: 1.5rem;
    @media (min-width: 700px) and (orientation: portrait)  {
    font-size: 3rem;
    }
    @media (min-width: 500px) and (orientation: landscape)  {
    margin-top: 10%;
    font-size: 1.2rem;
    }
    @media (min-width: 800px) and (orientation: landscape)  {
    font-size:2rem;
    }
    @media (min-width: 1000px) and (orientation: landscape)  {
        font-size: 4rem;
        margin: 0 100px 40px;
    }
    @media (min-width: 1200px) and (orientation: landscape)  {
        font-size: 3rem;
        margin: 0 100px 40px;
    }
    @media (min-width: 1400px) and (orientation: landscape)  {
        font-size: 4rem;
        margin: 0 0 40px 200px;
    }
    @media (min-width: 1600px) and (orientation: landscape)  {
        font-size: 5rem;
    }
`;

export const Adress = styled.p`
    text-align: left;
    font-size: .8rem;
    margin: 10px;
    font-family: 'Libre Baskerville', serif;
    color: ${theme.colors.white};
    @media (min-width: 700px) and (orientation: portrait)  {
    font-size: 1.5rem;
    }
    @media (min-width: 500px) and (orientation: landscape) {
        margin: 5px;
    }
    @media (min-width: 1000px) and (orientation: landscape)  {
        font-size: 1rem;
        maring: 10px;
    }
    @media (min-width: 1200px) and (orientation: landscape)  {
        font-size: 1.2rem;
    }
    @media (min-width: 1400px) and (orientation: landscape)  {
        font-size: 1.5rem;
        margin: 0 0 40px 200px;
    }
`;

export const Paragraph = styled.p`
    text-align: center;
    color: ${theme.colors.white};
    font-size: .8rem;
`;