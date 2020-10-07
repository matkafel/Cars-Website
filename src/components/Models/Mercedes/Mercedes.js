import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import MercedesContent from './MercedesContent';
import { Container, Main, MainTitle, IconScroll, SecondSection, Bussines, Confidence, Confort, Legend, SecondSectionTitle, ModelsWrapper, Model, Img } from './Mercedes.style';



const Mercedes = () => {
    useEffect(() => {
        Aos.init({ duration: 1200 })
    }, []);


    return (
        <>
            <Container>
                <Main>
                    <Header />
                    <MainTitle data-aos="slide-up">Be Part Of Legend</MainTitle>
                    <IconScroll />
                </Main>
                <SecondSection>
                    <Bussines data-aos="fade-up-left">
                        <SecondSectionTitle>
                            Lead in business class
                    </SecondSectionTitle>
                    </Bussines>
                    <Confidence data-aos="fade-up-right">
                        <SecondSectionTitle>
                            Lead with confidence
                    </SecondSectionTitle>
                    </Confidence>
                    <Confort data-aos="fade-down-left">
                        <SecondSectionTitle>
                            Lead in confort
                    </SecondSectionTitle>
                    </Confort>
                    <Legend data-aos="fade-down-right">
                        <SecondSectionTitle>
                            Be part of legend
                    </SecondSectionTitle>
                    </Legend>
                </SecondSection>
                <ModelsWrapper>
                    {MercedesContent.map((model) => {
                        return (
                            <Model>
                                <Img src={model.Img} data-aos={model.AnimationAos} />
                            </Model>
                        )
                    })}
                </ModelsWrapper>
                <Footer />
            </Container>
        </>
    )
}

export default Mercedes;
