import styled from 'styled-components';
import { ReactComponent as IconLogoPet } from '../../../img/logo-homepage.svg';
import { ReactComponent as IconMenu } from '../../../img/menu.svg';
import backgroundHomeMob from '../../../img/home-mob1x.jpg';
export const Container = styled.div`
  width: 375px;
  padding: 10px 20px;
  margin-right: auto;
  margin-left: auto;
  height: auto;
  background: rgb(249, 249, 249);
  position: relative;

  /* @media (min-width: 768px) {
    width: 100%;
    height: auto;
    padding: 10px 32px;
  }

  @media (min-width: 1440px) {
    width: 100%;
    padding: 10px 32px;
  } */
`;
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`;
export const Burger = styled(IconMenu)`
  width: 32px;
  height: 32px;
  fill: #ffffff;

  /* @media (min-width: 768px) {
    display: none;
  } */
`;
export const Baner = styled.div`
  background-image: url(${backgroundHomeMob});
  background-size: cover;
  width: 335px;
  height: 402px;
  overflow: hidden;
  border-radius: 30px;
`;
export const H1 = styled.h1`
  font-family: Manrope;
  font-size: 50px;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: -3%;
  text-align: left;
  color: rgb(255, 255, 255);
  margin-bottom: 24px;
  margin-top: 60px;
`;
export const Span = styled.span`
  color: rgb(255, 255, 255, 0.4);
`;

export const P = styled.p`
  color: rgb(255, 255, 255);
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -2%;
  text-align: left;
`;
export const Header = styled.header`
  border-radius: 30px;
  background: rgb(246, 184, 61);
  padding: 28px 20px 58px 20px;
`;
export const ButtonMenu = styled.button`
  background: transparent;
  position: relative;
`;
export const LogoPet = styled(IconLogoPet)`
  width: 76px;
  height: 20px;
  fill: #ffffff;
  /* margin-right: 10px;

  @media (min-width: 768px) {
    display: none;
  } */
`;
