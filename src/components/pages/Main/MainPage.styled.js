import styled from 'styled-components';
import backgroundMobile from '../../../img/main-mobile1x.jpg';
import { NavLink } from 'react-router-dom';
import { ReactComponent as IconLogoMob } from '../../../img/logo main.svg';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 375px;
  height: 812px;
  background-image: url(${backgroundMobile});
  background-size: contain;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavLogo = styled(NavLink)``;
export const LogoMobile = styled(IconLogoMob)`
  width: 190px;
  height: 50px;
`;
