import React, { useEffect } from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Aos from "aos";
import "aos/dist/aos.css";
import { Container, Main, Interior, MainTitle, MainText, IconScroll, ModelsWrapper, Mobility, Business, Sport, Convenience, Title, ImgCar } from './Audi.style'

import audiMobility from '../../../images/Audi/audi-mobility.png';
import audiBusiness from '../../../images/Audi/audi-business.png';
import audiSport from '../../../images/Audi/audi-sport.png';
import audiConvenience from '../../../images/Audi/audi-convenience.png';

const Audi = () => {

    useEffect(() => {
        Aos.init({ duration: 1200 })
    }, []);



    return (
        <>
            <Container>
                <Main >
                    <Header />
                    <MainText data-aos="fade-up">
                        <MainTitle>The most</MainTitle>
                        <MainTitle>comfortable in</MainTitle>
                        <MainTitle>this class</MainTitle>
                    </MainText>
                    <IconScroll />
                </Main>
                <Interior data-aos="zoom-in">
                    <IconScroll />
                </Interior>
                <ModelsWrapper>
                    <Mobility >
                        <Title>Mobility</Title>
                        <ImgCar data-aos="fade-right" src={audiMobility}></ImgCar>
                    </Mobility>
                    <Business >
                        <Title>Business</Title>
                        <ImgCar data-aos="fade-left" src={audiBusiness}></ImgCar>
                    </Business>
                    <Sport >
                        <Title>Sport</Title>
                        <ImgCar data-aos="fade-right" src={audiSport}></ImgCar>
                    </Sport>
                    <Convenience >
                        <Title>Convenience</Title>
                        <ImgCar data-aos="fade-left" src={audiConvenience}></ImgCar>
                    </Convenience>
                </ModelsWrapper>
                <Footer />
            </Container>
        </>
    )
}

export default Audi;
