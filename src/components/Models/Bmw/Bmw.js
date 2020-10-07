import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import { Container, Main, MainTitle, MainSubtitle, IconScroll, SecondSection, Bussiness, GranFace, GranBack, GranAll, BussinessTitle, BussinessSubtitle, BussinessModels, ModelsWrapper, ModelWrapper, ModelBg1, ModelBg2, ModelBg3, ModelBg4, ModelBg5, ModelBg6, ModelBg7, ModelBg8, Img, Text, TextWrapper, ModelName, ModelDesc, ModelEngine } from './Bmw.style';

import X3 from '../../../images/Bmw/Models/Bmw-x3.png';
import X4 from '../../../images/Bmw/Models/Bmw-x4.png';
import X5 from '../../../images/Bmw/Models/Bmw-x5.png';
import X6 from '../../../images/Bmw/Models/Bmw-x6.png';
import M3 from '../../../images/Bmw/Models/Bmw-m3.png';
import M5 from '../../../images/Bmw/Models/Bmw-m5.png';
import M8 from '../../../images/Bmw/Models/Bmw-m8.png';
import M8Gran from '../../../images/Bmw/Models/Bmw-m8-granCoupe.png';



const Bmw = () => {

    useEffect(() => {
        Aos.init({ duration: 1200 })
    }, []);

    return (
        <>
            <Container>
                <Main>
                    <Header />
                    <MainTitle data-aos="zoom-in-up">BMW INDIVIDUAL</MainTitle>
                    <MainSubtitle data-aos="zoom-in-up">The expression</MainSubtitle>
                    <MainSubtitle data-aos="zoom-in-up">of personality</MainSubtitle>
                    <IconScroll />
                </Main>
                <SecondSection>
                    <Bussiness>
                        <BussinessTitle>Bussines</BussinessTitle>
                        <BussinessSubtitle>Edition</BussinessSubtitle>
                        <BussinessModels>1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | Z | X | M | I |</BussinessModels>
                    </Bussiness>
                    <GranFace data-aos="fade-left" />
                    <GranBack data-aos="fade-right" />
                    <GranAll data-aos="fade-left" />
                </SecondSection>
                <ModelsWrapper>
                    <ModelWrapper>
                        <ModelBg1 data-aos="fade-right" >
                            <Img src={X3} />
                        </ModelBg1>
                        <Text>
                            <TextWrapper>
                                <ModelName>
                                    X3 Sports Activity Vehicle
                            </ModelName>
                                <ModelDesc>The original that inspired every X to follow.
                            </ModelDesc>
                                <ModelEngine>BMW X3 M40i</ModelEngine>
                                <ModelEngine>BMW X3 M40d</ModelEngine>
                            </TextWrapper>
                        </Text>
                    </ModelWrapper>
                    <ModelWrapper>
                        <ModelBg2 data-aos="fade-right" >
                            <Img src={X4} />
                        </ModelBg2>
                        <Text>
                            <TextWrapper>
                                <ModelName>
                                    X4 Sports Activity Vehicle
                            </ModelName>
                                <ModelDesc>The original that inspired every X to follow.
                            </ModelDesc>
                                <ModelEngine>BMW X4 M40i</ModelEngine>
                                <ModelEngine>BMW X4 M40d</ModelEngine>
                            </TextWrapper>
                        </Text>
                    </ModelWrapper>
                    <ModelWrapper>
                        <ModelBg3 data-aos="fade-right" >
                            <Img src={X5} />
                        </ModelBg3>
                        <Text>
                            <TextWrapper>
                                <ModelName>
                                    X5 Sports Activity Vehicle
                            </ModelName>
                                <ModelDesc>The original that inspired every X to follow.
                            </ModelDesc>
                                <ModelEngine>BMW X5 M50i</ModelEngine>
                                <ModelEngine>BMW X5 M50d</ModelEngine>
                            </TextWrapper>
                        </Text>
                    </ModelWrapper>
                    <ModelWrapper>
                        <ModelBg4 data-aos="fade-right" >
                            <Img src={X6} />
                        </ModelBg4>
                        <Text>
                            <TextWrapper>
                                <ModelName>
                                    X6 Sports Activity Vehicle
                            </ModelName>
                                <ModelDesc>The original that inspired every X to follow.
                            </ModelDesc>
                                <ModelEngine>BMW X6 M50i</ModelEngine>
                                <ModelEngine>BMW X6 M50d</ModelEngine>
                            </TextWrapper>
                        </Text>
                    </ModelWrapper>
                    <ModelWrapper>
                        <ModelBg5 data-aos="fade-right" >
                            <Img src={M3} />
                        </ModelBg5>
                        <Text>
                            <TextWrapper>
                                <ModelName>
                                    M3 Sedan
                            </ModelName>
                                <ModelDesc>M tuned version of the 3 Series Coupe.
                            </ModelDesc>
                                <ModelEngine>BMW M3 M40i</ModelEngine>
                                <ModelEngine>BMW M3 M40d</ModelEngine>
                            </TextWrapper>
                        </Text>
                    </ModelWrapper>
                    <ModelWrapper>
                        <ModelBg6 data-aos="fade-right" >
                            <Img src={M5} />
                        </ModelBg6>
                        <Text>
                            <TextWrapper>
                                <ModelName>
                                    M5 Sedan
                            </ModelName>
                                <ModelDesc>The ultimate M-tuned sedan.
                            </ModelDesc>
                                <ModelEngine>BMW M5</ModelEngine>
                                <ModelEngine>BMW M5 Competition</ModelEngine>
                            </TextWrapper>
                        </Text>
                    </ModelWrapper>
                    <ModelWrapper>
                        <ModelBg7 data-aos="fade-right" >
                            <Img src={M8} />
                        </ModelBg7>
                        <Text>
                            <TextWrapper>
                                <ModelName>
                                    M8 Coupe
                            </ModelName>
                                <ModelDesc>M performance and prestige.
                            </ModelDesc>
                                <ModelEngine>BMW M8 Coupe</ModelEngine>
                                <ModelEngine>BMW M5 Competition Coupe</ModelEngine>
                            </TextWrapper>
                        </Text>
                    </ModelWrapper>
                    <ModelWrapper>
                        <ModelBg8 data-aos="fade-right" >
                            <Img src={M8Gran} />
                        </ModelBg8>
                        <Text>
                            <TextWrapper>
                                <ModelName>
                                    M8 Gran Coupe
                            </ModelName>
                                <ModelDesc>M performance and prestige.
                            </ModelDesc>
                                <ModelEngine>BMW M8 Gran Coupe</ModelEngine>
                                <ModelEngine>BMW M5 Competition  Gran Coupe</ModelEngine>
                            </TextWrapper>
                        </Text>
                    </ModelWrapper>
                </ModelsWrapper>
                <Footer />
            </Container>
        </>
    )
}

export default Bmw;
