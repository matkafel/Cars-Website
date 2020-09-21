import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { HamburgerMenu, MenuSecondaryBackgroundColor, Container, MenuLayer, MenuBackground, Wrapper, MenuLinks, Nav, Ul, Li, StyledLink, Info, H3, Paragraph, Locations, Span, StyledNavLink } from './Menu.style';

import audi from '../../images/menu-audi.jpg'
import bmw from '../../images/menu-bmw.jpg'
import mercedes from '../../images/menu-mercedes.jpg'
import jaguar from '../../images/menu-jaguar.jpg'
import jeep from '../../images/menu-jeep.jpg'
import tesla from '../../images/menu-tesla.jpg'

const cars = [
  {
    name: 'Audi',
    image: audi,
  },
  {
    name: 'Bmw',
    image: bmw,
  },
  {
    name: 'Mercedes',
    image: mercedes,
  },
  {
    name: 'Jaguar',
    image: jaguar,
  },
  {
    name: 'Jeep',
    image: jeep,
  },
  {
    name: 'Tesla',
    image: tesla,
  },
]

const Menu = ({ state }) => {

  let menu = useRef(null);
  let revealMenu = useRef(null);
  let revealMenuBackground = useRef(null);
  let carBackground = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let info = useRef(null);

  useEffect(() => {
    if (state.clicked === false) {
      gsap.to([revealMenu, revealMenuBackground], {
        duration: 0.8,
        height: 0,
        ease: "power3.inOut",
        stagger: {
          amount: 0.07
        }
      });
      gsap.to(menu, {
        duration: 1,
        css: { display: "none" }
      })
    } else if (state.clicked === true || (state.clicked === true && state.initial === null)) {
      gsap.to(menu, {
        duration: 0,
        css: { display: "block" }
      });
      gsap.to([revealMenuBackground, revealMenu], {
        duration: 0,
        opacity: 1,
        height: "100%",
      });
      staggerReveal(revealMenuBackground, revealMenu);
      fadeInUp(info);
      staggerText(line1, line2, line3)
    }
  }, [state]);

  const staggerReveal = (node1, node2) => {
    gsap.from([node1, node2], {
      duration: .8,
      height: 0,
      transformOrigin: 'right top',
      skewY: 2,
      ease: 'power3.inOut',
      stagger: {
        amount: 0.1
      }
    })
  }


  const staggerText = (node1, node2, node3) => {
    gsap.from([node1, node2, node3], {
      duration: .8,
      y: 100,
      delay: .2,
      ease: 'power3.inOut',
      stagger: {
        amount: 0.3
      }
    })
  }



  const fadeInUp = (node) => {
    gsap.from(node, {
      y: 60,
      duration: 1,
      delay: .2,
      opacity: 0,
      ease: 'power3.inOut'
    })
  }


  const handleCars = car => {
    gsap.to(carBackground, {
      duration: 0,
      ease: "power3.inOut",
      backgroundColor: 'black',
      background: `url(${car}) center center`
    });
    gsap.to(carBackground, {
      duration: 0.7,
      opacity: 1,
      ease: "power3.inOut",

    })
    gsap.from(carBackground, {
      transformOrigin: "right top"
    })
  }

  const handleHover = e => {
    gsap.to(e.target, {
      duration: .3,
      y: 3,
      skewX: 4,
      ease: "power4.inOut"
    })
  }

  const handleHoverExit = e => {
    gsap.to(e.target, {
      duration: .3,
      y: -3,
      skewX: 0,
      ease: "power4.inOut"
    })
  }


  return (
    <HamburgerMenu ref={el => (menu = el)}>
      <MenuSecondaryBackgroundColor ref={el => (revealMenuBackground = el)}></MenuSecondaryBackgroundColor>
      <MenuLayer ref={el => (revealMenu = el)}>
        <MenuBackground ref={el => (carBackground = el)}></MenuBackground>
        <Container>
          <Wrapper>
            <MenuLinks>
              <Nav>
                <Ul>
                  <Li>
                    <StyledLink onMouseEnter={e => handleHover(e)} onMouseOut={e => handleHoverExit(e)} ref={el => (line1 = el)} to="/type-of-cars">Type of cars</StyledLink>
                  </Li>
                  <Li>
                    <StyledLink onMouseEnter={e => handleHover(e)} onMouseOut={e => handleHoverExit(e)} ref={el => (line2 = el)} to="/type-of-fuel">Type of fuel</StyledLink>
                  </Li>
                  <Li>
                    <StyledLink onMouseEnter={e => handleHover(e)} onMouseOut={e => handleHoverExit(e)} ref={el => (line3 = el)} to="/contact-us">Contact</StyledLink>
                  </Li>
                </Ul>
              </Nav>
              <Info ref={el => (info = el)}>
                <H3>Our Promise</H3>
                <Paragraph>
                  On our website you will find information about some of the best car brands. You will personalize information about the type and fuel of your new car.
                  This will make you a happy buyer of a new car
                </Paragraph>
              </Info>
              <Locations>
                Car brands:
                {cars.map(car => (
                <Span key={car.name}><StyledNavLink to={`/${car.name}`} onMouseEnter={() => handleCars(car.image)} >{car.name}</StyledNavLink></Span>
              ))}
              </Locations>
            </MenuLinks>
          </Wrapper>
        </Container>
      </MenuLayer>
    </HamburgerMenu>
  );
};

export default Menu;