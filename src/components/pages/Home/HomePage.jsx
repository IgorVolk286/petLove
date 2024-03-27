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
export const HomePage = () => {
  return (
    <Container>
      <Header>
        <Nav>
          <NavLink to="/home">
            <LogoPet />
          </NavLink>
          <ButtonMenu>
            <Burger />
          </ButtonMenu>
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

      <Baner></Baner>
    </Container>
  );
};
