import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as IconLogoPet } from '../../../img/logo-homepage.svg';
import { ReactComponent as IconMenu } from '../../../img/menu.svg';
import backgroundHomeMob from '../../../img/home-mob1x.jpg';
import backgroundHomeTabl from '../../../img/home-tabl1x.jpg';
import backgroundHomeDecktop from '../../../img/home-decktop1x.jpg';
export const Container = styled.div`
  width: 375px;
  padding: 10px 20px;
  margin-right: auto;
  margin-left: auto;
  height: auto;
  background: rgb(249, 249, 249);
  position: relative;

  @media (min-width: 768px) {
    width: 768px;
    height: auto;
    padding: 16px 32px;
  }

  @media (min-width: 1280px) {
    width: 1280px;
    padding: 32px;
  }
`;
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`;
export const Burger = styled(IconMenu)`
  width: 32px;
  height: 32px;
  fill: #ffffff;

  @media (min-width: 768px) {
    width: 36px;
    height: 36px;
  }
  @media (min-width: 1280px) {
    display: none;
  }
`;
export const Baner = styled.div`
  background-image: url(${backgroundHomeMob});
  background-size: cover;
  width: 335px;
  height: 402px;
  overflow: hidden;
  border-radius: 30px;
  @media (min-width: 768px) {
    width: 704px;
    height: 496px;
    background-image: url(${backgroundHomeTabl});
    border-radius: 60px;
  }
  @media (min-width: 1280px) {
    width: 1216px;
    height: 384px;
    background-image: url(${backgroundHomeDecktop});
  }
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

  @media (min-width: 768px) {
    font-size: 80px;
    line-height: 77px;
    margin-bottom: 32px;
    margin-top: 112px;
  }
  @media (min-width: 1280px) {
    font-size: 90px;
    line-height: 87px;
    width: 760px;
    margin-bottom: 0px;
    margin-top: 0px;
  }
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
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 22px;
    width: 255px;
    /* height: 88px; */
    margin-left: 400px;
  }

  @media (min-width: 1280px) {
    margin-left: 0px;
    margin-top: 80px;
    text-align: justify;
  }
`;
export const Header = styled.header`
  border-radius: 30px;
  background: rgb(246, 184, 61);
  padding: 28px 20px 58px 20px;

  @media (min-width: 768px) {
    width: 100%;
    height: auto;
    padding: 16px 32px;
  }
  @media (min-width: 1280px) {
    padding: 16px 64px 32px 64px;
  }
`;
export const ButtonMenu = styled.button`
  background: transparent;
  position: relative;
`;
export const LogoPet = styled(IconLogoPet)`
  width: 76px;
  height: 20px;
  fill: #ffffff;

  @media (min-width: 768px) {
    width: 106px;
    height: 28px;
  }
`;

export const DivBaner = styled.div`
  @media (min-width: 1280px) {
    margin-top: 112px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 73px;
  }
`;

export const ButtonAuth = styled.button`
  display: block;
  padding: 15px 20px;
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  background: rgb(246, 184, 61);

  &:hover {
    background: #fff4df;
    color: #f6b83d;
  }
`;
export const DiVNav = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }
`;
export const DivNavs = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }
`;
export const DivButtons = styled.div`
  display: none;

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    gap: 10px;
    margin-right: 142px;
  }
`;
export const Buttons = styled.button`
  padding: 15px 20px;
  background: transparent;
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  color: rgb(255, 255, 255);
  &:hover {
    background: #fff4df;
    color: #f6b83d;
  }

  @media (min-width: 1280px) {
    padding: 15px 20px;
    background: transparent;
    box-sizing: border-box;
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 30px;
    color: rgb(38, 38, 38);
    &:hover {
      border: 1px solid rgb(255, 255, 255);
    }
  }
`;
export const NavLin = styled(NavLink)`
  color: rgb(255, 255, 255);
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -3%;
  &:hover {
    color: #f6b83d;
  }
`;
export const Links = styled(NavLink)`
  color: rgb(255, 255, 255);
  font-family: Manrope;
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: -3%;
  &:hover {
    color: #f6b83d;
  }
`;
