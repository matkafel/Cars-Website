import React, { useEffect } from 'react';
import Header from '../Header/Header';
import Aos from "aos";
import Footer from "../../components/Models/Footer/Footer";
import { Container, H1, ContentWrapper, H3, Paragraph, ContentImg, ContentText, ImgEngine } from './TypeOfFuel.style';

import petrol from "../../images/Fuel/fuel-petrol.png";
import diesel from "../../images/Fuel/fuel-diesel.png";
import gas from "../../images/Fuel/fuel-gas.png";
import electric from "../../images/Fuel/fuel-electric.png";
import hybrid from "../../images/Fuel/fuel-hybrid.png";

const TypeOfFuel = () => {

    useEffect(() => {
        Aos.init({ duration: 1200 })
    }, []);

    return (
        <>
            <Container >
                <Header />
                <H1>Type of Fuel</H1>
                <ContentWrapper>
                    <ContentImg>
                        <ImgEngine data-aos="fade-right" src={petrol} />
                    </ContentImg>
                    <ContentText  >
                        <H3 data-aos="fade-left">Petrol</H3>
                        <Paragraph data-aos="fade-left">In most petrol engines, the fuel and air are usually pre-mixed before compression (although some modern petrol engines now use cylinder-direct petrol injection). The pre-mixing was formerly done in a carburetor, but now it is done by electronically controlled fuel injection, except in small engines where the cost/complication of electronics does not justify the added engine efficiency. The process differs from a diesel engine in the method of mixing the fuel and air, and in using spark plugs to initiate the combustion process. In a diesel engine, only air is compressed (and therefore heated), and the fuel is injected into very hot air at the end of the compression stroke, and self-ignites.</Paragraph>
                    </ContentText>
                </ContentWrapper>

                <ContentWrapper>
                    <ContentText>
                        <H3 data-aos="fade-right">Diesel</H3>
                        <Paragraph data-aos="fade-right">In general is any liquid fuel used in diesel engines, whose fuel ignition takes place, without any spark, as a result of compression of the inlet air mixture and then injection of fuel. Diesel engines have found broad use as a result of higher thermodynamic efficiency and thus fuel efficiency. This is particularly noted where diesel engines are run at part-load; as their air supply is not throttled as in a gasoline (petrol) engine, their efficiency still remains very high.</Paragraph>
                    </ContentText>
                    <ContentImg>
                        <ImgEngine data-aos="fade-left" src={diesel} />
                    </ContentImg>
                </ContentWrapper>

                <ContentWrapper>
                    <ContentImg>
                        <ImgEngine data-aos="fade-right" src={gas} />
                    </ContentImg>
                    <ContentText>
                        <H3 data-aos="fade-left">Gas</H3>
                        <Paragraph data-aos="fade-left">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</Paragraph>
                    </ContentText>
                </ContentWrapper>

                <ContentWrapper>
                    <ContentText>
                        <H3 data-aos="fade-right">Electric</H3>
                        <Paragraph data-aos="fade-right">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</Paragraph>
                    </ContentText>
                    <ContentImg>
                        <ImgEngine data-aos="fade-left" src={electric} />
                    </ContentImg>
                </ContentWrapper>

                <ContentWrapper>
                    <ContentImg>
                        <ImgEngine data-aos="fade-right" src={hybrid} />
                    </ContentImg>
                    <ContentText>
                        <H3 data-aos="fade-left">Hybrid</H3>
                        <Paragraph data-aos="fade-left">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</Paragraph>
                    </ContentText>
                </ContentWrapper>
                <Footer />
            </Container>
        </>
    )
}

export default TypeOfFuel;