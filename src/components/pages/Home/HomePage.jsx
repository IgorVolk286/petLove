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
} from '../Home/HomePage.styled';
import { NavLink } from 'react-router-dom';
import { Menu } from 'components/Layout/Menu/Menu';
export const HomePage = () => {
  const [menu, setMenu] = useState(false);

  const toggle = e => {
    setMenu(!menu);
  };
  console.log(menu);
  return (
    <Container>
      <Header>
        <Nav>
          <NavLink to="/home">
            <LogoPet />
          </NavLink>
          <ButtonMenu type="button" onClick={toggle}>
            <Burger />
          </ButtonMenu>
          {menu && <Menu menu={menu} toggle={toggle} />}
        </Nav>
        <div>
          <H1>
            Take good <Span>care</Span> of your small pets
          </H1>
          <P>
            Choosing a pet for your home is a choice that is meant to enrich
            your life with immeasurable joy and tenderness.
          </P>
        </div>
      </Header>

      <Baner />

      {/* <Menu /> */}
    </Container>
  );
};
