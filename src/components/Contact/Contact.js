import React, { useEffect } from 'react';
import Header from '../Header/Header';
import Aos from "aos";
import "aos/dist/aos.css";
import { Container, Flex, FlexImage, FlexText, H2, Adress, Paragraph, Img, Wrapper } from './Contact.style'

import car from '../../images/ContactSvg.svg';

const Contact = () => {

    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, []);


    return (
        <>
            <Container>
                <Header />
                <Wrapper data-aos="fade-up">
                    <Flex>
                        <FlexImage data-aos="fade-right">
                            <Img src={car} alt="car"></Img>
                        </FlexImage>
                        <FlexText data-aos="fade-left">
                            <H2>Get in touch</H2>
                            <Adress>Warsaw, Poland</Adress>
                            <Adress>cars@gmail.com</Adress>
                            <Adress>+31 20 987 75 28</Adress>
                        </FlexText>
                    </Flex>
                    <Paragraph>Making with ❤️ by Mateusz Kafel</Paragraph>
                </Wrapper>
            </Container>
        </>
    )

}

export default Contact