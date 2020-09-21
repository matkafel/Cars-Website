import React, { useState, useRef, useEffect } from 'react';
import { TweenLite, Power3 } from 'gsap';
import Header from '../Header/Header';
import { Container, PopUp, RotateImg, Wrapper, H1, TestimonialSection, TestimonialContainer, ArrowRight, Inner, TImage, UlImage, LiImage, ImgImage, TContent, UlContent, LiContent, ContentInner, Quote, Title } from './TypeOfCar.style';

import rightArrow from '../../images/arrow-right.svg';
import RorarteIcon from '../../images/rotate.svg'

const testimonials = [
    {
        title: 'City car',
        image: `${require("../../images/city.png")}`,
        quote: "City German automobile manufacturer that designs, engineers, produces, markets and distributes luxury vehicles. Audi is a member of the Volkswagen Group and has its roots at Ingolstadt, Bavaria, Germany. Audi-branded vehicles are produced in nine production facilities worldwide."
    },
    {
        title: 'Hatchback',
        image: `${require("../../images/hatchback.png")}`,
        quote: "Hatchback German automobile manufacturer that designs, engineers, produces, markets and distributes luxury vehicles. Audi is a member of the Volkswagen Group and has its roots at Ingolstadt, Bavaria, Germany. Audi-branded vehicles are produced in nine production facilities worldwide."
    },
    {
        title: 'Sedan ',
        image: `${require("../../images/sedan.png")}`,
        quote: "Sedan German automobile manufacturer that designs, engineers, produces, markets and distributes luxury vehicles. Audi is a member of the Volkswagen Group and has its roots at Ingolstadt, Bavaria, Germany. Audi-branded vehicles are produced in nine production facilities worldwide."
    },
    {
        title: 'Kombi',
        image: `${require("../../images/kombi.png")}`,
        quote: "Kombi German automobile manufacturer that designs, engineers, produces, markets and distributes luxury vehicles. Audi is a member of the Volkswagen Group and has its roots at Ingolstadt, Bavaria, Germany. Audi-branded vehicles are produced in nine production facilities worldwide."
    },
    {
        title: 'Suv',
        image: `${require("../../images/suv.png")}`,
        quote: "Suv German automobile manufacturer that designs, engineers, produces, markets and distributes luxury vehicles. Audi is a member of the Volkswagen Group and has its roots at Ingolstadt, Bavaria, Germany. Audi-branded vehicles are produced in nine production facilities worldwide."
    },
    {
        title: 'Sport car',
        image: `${require("../../images/sport.png")}`,
        quote: "Sport German automobile manufacturer that designs, engineers, produces, markets and distributes luxury vehicles. Audi is a member of the Volkswagen Group and has its roots at Ingolstadt, Bavaria, Germany. Audi-branded vehicles are produced in nine production facilities worldwide."
    },
]

const TypeOfCar = () => {
    let imageList = useRef(null);
    let testimonialList = useRef(null);
    const imageWidth = 545;

    const [state, setState] = useState({
        isActive1: true,
        isActive2: false,
        isActive3: false,
        isActive4: false,
        isActive5: false,
        isActive6: false,
    });


    useEffect(() => {
        TweenLite.to(testimonialList.children[0], 0, {
            opacity: 1
        })
    }, [])

    const slideLeft = (index, duration, multipled = 1) => {
        TweenLite.to(imageList.children[index], duration, {
            x: -imageWidth * multipled,
            ease: Power3.easeOut
        });
    }

    const scale = (index, duration) => {
        TweenLite.from(imageList.children[index], duration, {
            scale: 1.5,
            ease: Power3.easeOut
        });
    }

    const fadeOut = (index, duration) => {
        TweenLite.to(testimonialList.children[index], duration, {
            opacity: 0
        });
    }

    const fadeIn = (index, duration) => {
        TweenLite.to(testimonialList.children[index], duration, {
            opacity: 1,
            delay: 1,
        });
    }


    const nextSlide = () => {
        if (imageList.children[0].classList.contains('active')) {
            setState({ isActive1: false, isActive2: true });
            slideLeft(1, 1, 1);
            slideLeft(0, 1, 1);
            scale(1, 2);
            fadeOut(0, 1);
            fadeIn(1, 1);
        } else if (imageList.children[1].classList.contains('active')) {
            setState({ isActive2: false, isActive3: true });
            slideLeft(1, 1, 2);
            slideLeft(2, 1, 2);
            scale(2, 2);
            fadeOut(1, 1);
            fadeIn(2, 1);
        } else if (imageList.children[2].classList.contains('active')) {
            setState({ isActive3: false, isActive4: true });
            slideLeft(2, 1, 3);
            slideLeft(3, 1, 3);
            scale(3, 2);
            fadeOut(2, 1);
            fadeIn(3, 1);
        } else if (imageList.children[3].classList.contains('active')) {
            setState({ isActive4: false, isActive5: true });
            slideLeft(3, 1, 4);
            slideLeft(4, 1, 4);
            scale(4, 2);
            fadeOut(3, 1);
            fadeIn(4, 1);
        } else if (imageList.children[4].classList.contains('active')) {
            setState({ isActive5: false, isActive6: true });
            slideLeft(4, 1, 5);
            slideLeft(5, 1, 5);
            scale(5, 2);
            fadeOut(4, 1);
            fadeIn(5, 1);
        } else if (imageList.children[5].classList.contains('active')) {
            setState({ isActive1: true, isActive6: false });
            slideLeft(5, 1, 6);
            slideLeft(0, 0, 0);
            scale(0, 1);
            fadeOut(5, 1);
            fadeIn(0, 1);
        }
    };




    return (
        <>
            <Container >
                <PopUp>
                    <RotateImg src={RorarteIcon} alt="" />
                </PopUp>
                <Wrapper>
                    <Header />
                    <H1>Type of car</H1>
                    <TestimonialSection>
                        <TestimonialContainer>
                            <Inner >
                                <TImage>
                                    <UlImage ref={el => (imageList = el)}>
                                        <LiImage className={state.isActive1 ? "active" : ""}>
                                            <ImgImage src={testimonials[0].image} alt={testimonials[0].title} />
                                        </LiImage>
                                        <LiImage className={state.isActive2 ? "active" : ""}>
                                            <ImgImage src={testimonials[1].image} alt={testimonials[1].title} />
                                        </LiImage>
                                        <LiImage className={state.isActive3 ? "active" : ""}>
                                            <ImgImage src={testimonials[2].image} alt={testimonials[2].title} />
                                        </LiImage>
                                        <LiImage className={state.isActive4 ? "active" : ""}>
                                            <ImgImage src={testimonials[3].image} alt={testimonials[3].title} />
                                        </LiImage>
                                        <LiImage className={state.isActive5 ? "active" : ""}>
                                            <ImgImage src={testimonials[4].image} alt={testimonials[4].title} />
                                        </LiImage>
                                        <LiImage className={state.isActive6 ? "active" : ""}>
                                            <ImgImage src={testimonials[5].image} alt={testimonials[5].title} />
                                        </LiImage>
                                    </UlImage>
                                </TImage>
                                <TContent>
                                    <UlContent ref={el => (testimonialList = el)}>
                                        <LiContent className={state.isActive1 ? "active" : ""}>
                                            <ContentInner>
                                                <Title>{testimonials[0].title}</Title>
                                                <Quote>{testimonials[0].quote}</Quote>
                                            </ContentInner>
                                        </LiContent>
                                        <LiContent className={state.isActive2 ? "active" : ""}>
                                            <ContentInner>
                                                <Title>{testimonials[1].title}</Title>
                                                <Quote>{testimonials[1].quote}</Quote>
                                            </ContentInner>
                                        </LiContent>
                                        <LiContent className={state.isActive3 ? "active" : ""}>
                                            <ContentInner>
                                                <Title>{testimonials[2].title}</Title>
                                                <Quote>{testimonials[2].quote}</Quote>
                                            </ContentInner>
                                        </LiContent>
                                        <LiContent className={state.isActive4 ? "active" : ""}>
                                            <ContentInner>
                                                <Title>{testimonials[3].title}</Title>
                                                <Quote>{testimonials[3].quote}</Quote>
                                            </ContentInner>
                                        </LiContent>
                                        <LiContent className={state.isActive5 ? "active" : ""}>
                                            <ContentInner>
                                                <Title>{testimonials[4].title}</Title>
                                                <Quote>{testimonials[4].quote}</Quote>
                                            </ContentInner>
                                        </LiContent>
                                        <LiContent className={state.isActive6 ? "active" : ""}>
                                            <ContentInner>
                                                <Title>{testimonials[5].title}</Title>
                                                <Quote>{testimonials[5].quote}</Quote>
                                            </ContentInner>
                                        </LiContent>
                                    </UlContent>
                                </TContent>
                            </Inner>
                            <ArrowRight onClick={nextSlide}>
                                <span>
                                    <img src={rightArrow} alt="right arrow" />
                                </span>
                            </ArrowRight>
                        </TestimonialContainer>
                    </TestimonialSection>
                </Wrapper>
            </Container>
        </>
    )
}

export default TypeOfCar;