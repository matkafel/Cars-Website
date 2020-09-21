import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import Header from '../../Header/Header';
import FooterWrapper from '../Footer/Footer';
import { Container, IconScroll, Title, Model3, ModelY, ModelX, ModelS } from './Tesla.style';


const Tesla = () => {
    useEffect(() => {
        Aos.init({ duration: 1200 })
    }, []);


    return (
        <>
            <Container>
                <Header />
                <Model3 data-aos="fade-up-left">
                    <Title>Model 3</Title>
                    <IconScroll />
                </Model3>
                <ModelY data-aos="fade-up-right" >
                    <Title>Model Y</Title>
                    <IconScroll />
                </ModelY>
                <ModelX data-aos="fade-up-left">
                    <Title>Model X</Title>
                    <IconScroll />
                </ModelX>
                <ModelS data-aos="fade-up-right">
                    <Title>Model S</Title>
                </ModelS>
                <FooterWrapper />
            </Container>
        </>
    )
}

export default Tesla;
