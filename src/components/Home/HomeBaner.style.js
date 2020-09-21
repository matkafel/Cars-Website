import styled from "styled-components";
import { motion } from "framer-motion";
import theme from '../../styles/Theme';




export const Banner = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${theme.colors.black};
  overflow: hidden;
`;

export const Video = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  video {
    object-fit: cover;
  }
`;
export const Canvas = styled.canvas`
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  height: 100%;
  width: 100vw;
`;


export const BannerTitle = styled(motion.h1)`
  position: absolute;
  bottom: 0px;
  left: 0px;
  color: ${props => props.theme.text};
  pointer-events: none;
`
export const Headline = styled(motion.span)`
  display: block;
  color: ${theme.colors.white};
  font-size: 4rem;
  font-weight: 900;
  line-height: 0.76;
  overflow: hidden;
  @media (min-width: 360px) and (orientation: portrait)  {
    font-size: 5rem;
  }
  @media (min-width: 760px) and (orientation: portrait)  {
    font-size: 9rem;
  }
  @media (min-width: 1000px) and (orientation: landscape)  {
    font-size: 12rem;
  }
`;
