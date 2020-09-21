import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Hamburger from '../menu/Menu';
import { Container, Wrapper, HeaderWrapper, InnerHeader, Menu, StyledLink, Button } from '../Header/Header.styles';



const Header = ({ history }) => {
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: 'Menu',
  });

  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    history.listen(() => {
      setState({ clicked: false, menuName: 'Menu' });
    })
  })

  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: 'Close',
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: 'Menu',
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: 'Close',
      });
    }
  };

  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return (
    <HeaderWrapper>
      <Container>
        <Wrapper>
          <InnerHeader></InnerHeader>
          <Menu>
            <StyledLink to="/">CARS.</StyledLink>
            <Button disabled={disabled} onClick={handleMenu}>
              <i className="fas fa-bars"></i>
            </Button>
          </Menu>
        </Wrapper>
      </Container>
      <Hamburger state={state} />
    </HeaderWrapper>
  );
};

export default withRouter(Header);