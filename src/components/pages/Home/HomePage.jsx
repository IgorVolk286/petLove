import { useState } from 'react';
import {
  LogoPet,
  Burger,
  ButtonMenu,
  Container,
  Nav,
  Header,
  H1,
  Span,
  P,
  Baner,
  DivBaner,
  ButtonAuth,
  DiVNav,
  DivButtons,
  Buttons,
  NavLin,
  Links,
} from '../Home/HomePage.styled';
import { NavLink } from 'react-router-dom';
import { Menu } from 'components/Layout/Menu/Menu';
export const HomePage = () => {
  const [menu, setMenu] = useState(false);

  const toggle = e => {
    setMenu(!menu);
  };

  return (
    <Container>
      <Header>
        <Nav>
          <NavLink to="/home">
            <LogoPet />
          </NavLink>

          <DivButtons>
            <Buttons type="button">
              <Links to="/news">News</Links>
            </Buttons>
            <Buttons type="button">Find pet</Buttons>
            <Buttons type="button">
              <Links to="/friends">Our friends</Links>
            </Buttons>
          </DivButtons>
          <DiVNav>
            <ButtonAuth type="button">
              <NavLin to="/login"> LOGIN </NavLin>
            </ButtonAuth>
            <ButtonAuth type="button">
              <NavLin to="/register">REGISTRATION</NavLin>
            </ButtonAuth>
          </DiVNav>
          <ButtonMenu type="button" onClick={toggle}>
            <Burger />
          </ButtonMenu>
          {menu && <Menu menu={menu} toggle={toggle} color={'#ffffff'} />}
        </Nav>
        <DivBaner>
          <H1>
            Take good <Span>care</Span> of your small pets
          </H1>
          <P>
            Choosing a pet for your home is a choice that is meant to enrich
            your life with immeasurable joy and tenderness.
          </P>
        </DivBaner>
      </Header>

      <Baner />

      {/* <Menu /> */}
    </Container>
  );
};
