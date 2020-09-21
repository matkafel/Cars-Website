import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import Header from '../../Header/Header';
import FooterWrapper from '../Footer/Footer';
import { Container, Main, MainTitle, IconScroll, SecondSection, Bussines, Confidence, Confort, Legend, SecondSectionTitle, ModelsWrapper, Model, Img } from './Mercedes.style';

import AmgCoupe from '../../../images/Mercedes/Models/AMG-Coupe.png';
import AmgGt2 from '../../../images/Mercedes/Models/AMG-GT2.png';
import AmgSedan from '../../../images/Mercedes/Models/AMG-Sedan.png';
import Gclass from '../../../images/Mercedes/Models/G-Class.png';
import Gla from '../../../images/Mercedes/Models/GLA.png';
import SClassCoupe from '../../../images/Mercedes/Models/S-Class-Coupe.png';
import SClass from '../../../images/Mercedes/Models/S-Class.png';
import SLRoadster from '../../../images/Mercedes/Models/SL-Roadster.png';


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
                    <Model>
                        <Img src={AmgCoupe} data-aos="fade-right" />
                    </Model>
                    <Model>
                        <Img src={AmgGt2} data-aos="fade" />
                    </Model>
                    <Model>
                        <Img src={AmgSedan} data-aos="fade-left" />
                    </Model>
                    <Model>
                        <Img src={Gclass} data-aos="fade-right" />
                    </Model>
                    <Model>
                        <Img src={Gla} data-aos="fade" />
                    </Model>
                    <Model>
                        <Img src={SClassCoupe} data-aos="fade-left" />
                    </Model>
                    <Model>
                        <Img src={SClass} data-aos="fade-right" />
                    </Model>
                    <Model>
                        <Img src={SLRoadster} data-aos="fade" />
                    </Model>
                    <Model>
                        <Img src={AmgSedan} data-aos="fade-left" />
                    </Model>
                </ModelsWrapper>
                <FooterWrapper />
            </Container>
        </>
    )
}

export default Mercedes;
