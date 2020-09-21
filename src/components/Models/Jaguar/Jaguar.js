import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import Header from '../../Header/Header';
import FooterWrapper from '../Footer/Footer';
import { Container, Main, IconScroll, SecondSection, TextSection, TextSectionTitle, TextSectionContent, LogoSection, LogoImg, MainTitle, ModelsWrapper, Model, ModelText, TextTitle, TextContent, ModelImg } from './Jaguar.style';



import FPace from '../../../images/Jaguar/Models/F-Pace.png';
import XE from '../../../images/Jaguar/Models/XE.png';
import XF from '../../../images/Jaguar/Models/XF.png';
import XJ from '../../../images/Jaguar/Models/XJ.png';
import FTYPE from '../../../images/Jaguar/Models/F-TYPE.png';
import EPace from '../../../images/Jaguar/Models/E-PACE.png';
import IPace from '../../../images/Jaguar/Models/I-PACE.png';

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
                    <Model>
                        <ModelText>
                            <TextTitle>f-pace</TextTitle>
                            <TextContent>The first Jaguar luxury performance SUV
                            brings together sporty handling and dramatic
                            beauty with everyday practicality and efficiency.</TextContent>
                        </ModelText>
                        <ModelImg src={FPace} data-aos="slide-left" />
                    </Model>
                    <Model>
                        <ModelText>
                            <TextTitle>xe</TextTitle>
                            <TextContent>XE combines technology, handling and performence to exhilarating effect. Agile on city streets, powerful out of town. Wherever you experience the XE, you'll enjoy each exhilarating second.</TextContent>
                        </ModelText>
                        <ModelImg src={XE} data-aos="slide-left" />
                    </Model>
                    <Model>
                        <ModelText>
                            <TextTitle>xf</TextTitle>
                            <TextContent>Striking contemporary style meets superb
                            craftsmanship in the mid-size XF.</TextContent>
                        </ModelText>
                        <ModelImg src={XF} data-aos="slide-left" />
                    </Model>
                    <Model>
                        <ModelText>
                            <TextTitle>xj</TextTitle>
                            <TextContent>The most commanding of all Jaguar cars,
                            the XJ combines a dynamic driving
                            experience with luxurious interior styling</TextContent>
                        </ModelText>
                        <ModelImg src={XJ} data-aos="slide-left" />
                    </Model>
                    <Model>
                        <ModelText>
                            <TextTitle>f-type</TextTitle>
                            <TextContent>Unyielding power meets undeniable
                            sophistication. The F-TYPE is a true
                            Jaguar sports car.</TextContent>
                        </ModelText>
                        <ModelImg src={FTYPE} data-aos="slide-left" />
                    </Model>
                    <Model>
                        <ModelText>
                            <TextTitle>e-pace</TextTitle>
                            <TextContent>New E-PACE is the first compact
                            SUV from Jaguar. It's unique
                            combination of looks, agility
                            and dynamic driving.</TextContent>
                        </ModelText>
                        <ModelImg src={EPace} data-aos="slide-left" />
                    </Model>
                    <Model>
                        <ModelText>
                            <TextTitle>i-pace</TextTitle>
                            <TextContent>Intrducing the first all-electric
                            performence SUV from Jaguar.</TextContent>
                        </ModelText>
                        <ModelImg src={IPace} data-aos="slide-left" />
                    </Model>
                </ModelsWrapper>
                <FooterWrapper />
            </Container>
        </>
    )
}

export default Jaguar;
