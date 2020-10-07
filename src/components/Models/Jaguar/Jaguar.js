import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import { Container, Main, IconScroll, SecondSection, TextSection, TextSectionTitle, TextSectionContent, LogoSection, LogoImg, MainTitle, ModelsWrapper, Model, ModelText, TextTitle, TextContent, ModelImg } from './Jaguar.style';
import JaguarContent from './JaguarContent';

import Logo from '../../../images/BrandsLogo/jaguar-logo.png';


const Jaguar = () => {
    useEffect(() => {
        Aos.init({ duration: 1200 })
    }, []);

    return (
        <>
            <Container>
                <Main>
                    <Header />
                    <MainTitle data-aos="slide-up">Jaguar among cars</MainTitle>
                    <IconScroll />
                </Main>
                <SecondSection>
                    <TextSection>
                        <TextSectionTitle>
                            Jaguar salons work
                            </TextSectionTitle>
                        <TextSectionContent>
                            Our global community has a spirit of endurance. Now is the time when it will be even more visible and needed. The world is in a difficult moment, but we will make it together! We believe that the future will be good for all of us.
                            </TextSectionContent>
                    </TextSection>
                    <LogoSection>
                        <LogoImg src={Logo} />
                    </LogoSection>
                </SecondSection>
                <ModelsWrapper>
                    {JaguarContent.map((model) => {
                        return (
                            <Model>
                                <ModelText>
                                    <TextTitle>{model.Title}</TextTitle>
                                    <TextContent>{model.Text}</TextContent>
                                </ModelText>
                                <ModelImg src={model.Img} data-aos="slide-left" />
                            </Model>
                        )
                    })}
                </ModelsWrapper>
                <Footer />
            </Container>
        </>
    )
}

export default Jaguar;




