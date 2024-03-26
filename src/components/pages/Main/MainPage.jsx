import {
  Container,
  NavLogo,
  LogoMobile,
} from '../../pages/Main/MainPage.styled';
export const MainPage = () => {
  return (
    <Container>
      <NavLogo to="/home">
        <LogoMobile />
      </NavLogo>
    </Container>
  );
};
