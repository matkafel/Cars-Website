import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import JeepContent from './JeepContent';
import { Container, Main, IconScroll, MainTitle, AllModels, AllModelsTitle, ModelsWrapper, Model, ModelText, ModelTextTitle, ModelTextDesc, ModelImg, Img, BreakBoundaries, BreakBoundariesTitle } from './Jeep.style';




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
                    {JeepContent.map((model) => {
                        return (
                            <Model>
                                <ModelText data-aos="fade-up">
                                    <ModelTextTitle>{model.Title}</ModelTextTitle>
                                    <ModelTextDesc>
                                        {model.Description}
                                    </ModelTextDesc>
                                </ModelText>
                                <ModelImg>
                                    <Img src={model.Img} data-aos={model.ImgAnimation} />
                                </ModelImg>
                            </Model>
                        )
                    })}

                </ModelsWrapper>
                <BreakBoundaries>
                    <BreakBoundariesTitle data-aos="fade-up">
                        Made to break boundaries
                    </BreakBoundariesTitle>
                </BreakBoundaries>
                <Footer />
            </Container>
        </>
    )
}

export default Jeep;




