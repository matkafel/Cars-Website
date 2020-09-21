import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import Header from '../../Header/Header';
import FooterWrapper from '../Footer/Footer';
import { Container, Main, IconScroll, MainTitle, AllModels, AllModelsTitle, ModelsWrapper, Model, ModelText, ModelTextTitle, ModelTextDesc, ModelImg, Img, BreakBoundaries, BreakBoundariesTitle } from './Jeep.style';

import Renegade from '../../../images/Jeep/model/Renegade.png';
import Compass from '../../../images/Jeep/model/Compass.png';
import Cherokee from '../../../images/Jeep/model/Cherokee.png';
import Wrangler from '../../../images/Jeep/model/Wrangler.png';
import WranglerUltimate from '../../../images/Jeep/model/WranglerUltimate.png';


const Jeep = () => {
    useEffect(() => {
        Aos.init({ duration: 1200 })
    }, []);

    return (
        <>
            <Container>
                <Main>
                    <Header />
                    <MainTitle data-aos="slide-right">Feel the taste of freedom</MainTitle>
                    <IconScroll />
                </Main>
                <AllModels>
                    <AllModelsTitle data-aos="fade-up">Adapted to all conditions</AllModelsTitle>
                </AllModels>
                <ModelsWrapper>
                    <Model>
                        <ModelText data-aos="fade-up">
                            <ModelTextTitle>renegade</ModelTextTitle>
                            <ModelTextDesc>
                                We all have a wild nature
                            </ModelTextDesc>
                        </ModelText>
                        <ModelImg>
                            <Img src={Renegade} data-aos="fade-left" />
                        </ModelImg>
                    </Model>
                    <Model>
                        <ModelText data-aos="fade-up">
                            <ModelTextTitle>compas</ModelTextTitle>
                            <ModelTextDesc>
                                Explore every possibility
                            </ModelTextDesc>
                        </ModelText>
                        <ModelImg>
                            <Img src={Compass} data-aos="fade-right" />
                        </ModelImg>
                    </Model>
                    <Model>
                        <ModelText data-aos="fade-up">
                            <ModelTextTitle>Cherokee</ModelTextTitle>
                            <ModelTextDesc>
                                Born from the authentic
                                Jeep bottom code
                            </ModelTextDesc>
                        </ModelText>
                        <ModelImg>
                            <Img src={Cherokee} data-aos="fade-left" />
                        </ModelImg>
                    </Model>
                    <Model>
                        <ModelText data-aos="fade-up">
                            <ModelTextTitle>Wrangler</ModelTextTitle>
                            <ModelTextDesc>
                                Definition of freedom and adventure
                            </ModelTextDesc>
                        </ModelText>
                        <ModelImg>
                            <Img src={Wrangler} data-aos="fade-right" />
                        </ModelImg>
                    </Model>
                    <Model>
                        <ModelText data-aos="fade-up">
                            <ModelTextTitle>Wrangler Unlimited</ModelTextTitle>
                            <ModelTextDesc>
                                Definition of freedom and adventure
                            </ModelTextDesc>
                        </ModelText>
                        <ModelImg>
                            <Img src={WranglerUltimate} data-aos="fade-left" />
                        </ModelImg>
                    </Model>
                </ModelsWrapper>
                <BreakBoundaries>
                    <BreakBoundariesTitle data-aos="fade-up">
                        Made to break boundaries
                    </BreakBoundariesTitle>
                </BreakBoundaries>
                <FooterWrapper />
            </Container>
        </>
    )
}

export default Jeep;
