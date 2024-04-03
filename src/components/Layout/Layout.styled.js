import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
// import { ReactComponent as IconLogo } from '../../img/logoUser.svg';
import { ReactComponent as IconLogoPet } from '../../img/logoLayout.svg';
import { ReactComponent as IconMenu } from '../../img/menu.svg';

export const Burger = styled(IconMenu)`
  width: 32px;
  height: 32px;

  @media (min-width: 768px) {
    width: 36px;
    height: 36px;
  }
  @media (min-width: 1280px) {
    display: none;
  }
`;
export const LogoPet = styled(IconLogoPet)`
  width: 76px;
  height: 20px;
  fill: #ffffff;

  @media (min-width: 768px) {
    width: 105px;
    height: 28px;
  }
`;

export const Logo = styled(NavLink)`
  display: none;
  transition: transform 0.3s ease;

  &:hover {
    color: red;
  }
  @media (min-width: 768px) {
    display: block;
    color: rgb(251, 251, 251);
    font-family: Helvetica Neue;
    font-size: 18px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: -2%;
    margin-right: 30px;
  }
  /* @media (min-width: 1440px) {
    display: block;
    color: rgb(251, 251, 251);
    font-family: Helvetica Neue;
    font-size: 24px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: -2%;
  } */

  // export const IconLogoUser = styled(IconLogo)
`;
//   width: 12px;
//   height: 12px;

//   @media (min-width: 768px) {
//     width: 14px;
//     height: 14px;
//   }

//   @media (min-width: 1440px) {
//     width: 16px;
//     height: 16px;
//   }
// `;
export const IconDiv = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 6px;
  background: rgb(251, 251, 251);
  margin-right: 14px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    width: 30px;
    height: 30px;
    border-radius: 8px;
  }
  @media (min-width: 1280px) {
    width: 40px;
    height: 40px;
    border-radius: 10px;
  }
`;
export const ButtonlogOut = styled.button`
  color: #ffffff;
  font-family: Helvetica Neue;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -1%;
  border-radius: 5px;
  background-color: var(--main-color--);

  @media (min-width: 768px) {
    display: block;
    color: rgb(251, 251, 251);
    font-family: Helvetica Neue;
    font-size: 14px;
    font-weight: 500;
    line-height: 15px;
    padding: 10px 30px;
    border-radius: 20px;

    border: 1px solid rgba(251, 251, 251, 0.4);

    &:hover {
      color: var(--main-color--);
      background-color: #ffffff;
    }
  }
  @media (min-width: 1280px) {
    color: rgb(251, 251, 251);
    font-family: Helvetica Neue;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -1%;
    padding: 14px 39px;
    box-sizing: border-box;
    border: 1px solid rgba(251, 251, 251, 0.4);
    border-radius: 30px;
    background-color: transparent;
  }
`;
export const Link = styled(NavLink)`
  color: rgb(251, 251, 251);
  position: relative;
  font-family: Helvetica Neue;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -1%;
  transition: transform 0.3s ease;

  &:hover {
    color: red;
  }
  &.active::after {
    content: '';
    position: absolute;
    width: 4px;
    height: 4px;
    left: 15px;
    right: -35px;
    top: 24px;
    bottom: -24px;
    background-color: #ffffff;
    border-radius: 50%;
  }

  @media (min-width: 768px) {
    &.active::after {
      width: 8px;
      height: 8px;
    }
  }

  @media (min-width: 1280px) {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -1%;
  }
`;

export const Container = styled.div`
  width: 375px;
  padding: 34px 20px 20px 20px;
  margin-right: auto;
  margin-left: auto;
  height: auto;
  background: rgb(249, 249, 249);
  position: relative;

  @media (min-width: 768px) {
    width: 100%;
    padding: 32px;
  }

  @media (min-width: 1280px) {
    width: 1280px;
  }
`;
export const Header = styled.header`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    width: 100%;
    /* padding: 10px 32px; */
  }

  @media (min-width: 1280px) {
    width: 1216px;
    justify-content: space-between;
    background: rgb(249, 249, 249);
  }
`;
export const ButtonLogin = styled.button`
  background-color: var(--main-color--);
  color: #ffffff;
  font-family: Helvetica Neue;
  font-size: 10px;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: -1%;
  border-radius: 5px;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: 14px;
    padding: 10px 30px;
    border: 1px solid rgba(251, 251, 251, 0.4);
    border-radius: 20px;
    margin-bottom: 0px;
    &:hover {
      color: var(--main-color--);
      background-color: #ffffff;
    }
  }

  @media (min-width: 1440px) {
    font-size: 16px;
    line-height: 20px;
    padding: 14px 39px;
    border-radius: 30px;
  }
`;
export const ButtonReg = styled.button`
  background-color: var(--main-color--);
  color: #ffffff;
  font-family: Helvetica Neue;
  font-size: 10px;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: -1%;
  border-radius: 5px;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 20px;
    padding: 10px 30px;
    margin: 0px 8px;
    border-radius: 20px;
    border: 1px solid #ffffff;
    &:hover {
      color: var(--main-color--);
      background-color: #ffffff;
    }
  }
  @media (min-width: 1440px) {
    padding: 14px 40px;
    margin: 0px 8px;
    border-radius: 30px;
  }
`;

export const DivButton = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
`;
export const NavList = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;

  @media (min-width: 768px) {
    gap: 30px;
  }

  @media (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    margin-right: 92px;
  }
`;
export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export const Name = styled.p`
  display: none;

  @media (min-width: 768px) {
    display: block;
    color: rgb(251, 251, 251);
    font-family: Helvetica Neue;
    font-size: 18px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -1%;
    margin-right: 24px;
  }
`;

export const Menu = styled.div`
  width: 100px;
  height: auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 10px;
  position: absolute;
  top: 50px;
  right: 60px;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const ButtonMenu = styled.button`
  background: transparent;
  position: relative;
`;

export const ButtonAuth = styled.button`
  display: block;
  padding: 15px 20px;
  border-radius: 30px;
  background: rgb(246, 184, 61);

  &:hover {
    background: #fff4df;
    color: #f6b83d;
  }
`;
export const NavLin = styled(NavLink)`
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
    border: 1px solid rgb(255, 255, 255);
  }

  @media (min-width: 1280px) {
    padding: 15px 20px;
    background: transparent;
    box-sizing: border-box;
    border: 1px solid rgba(38, 38, 38, 0.15);
    border-radius: 30px;
    color: rgb(38, 38, 38);
    &:hover {
      border: 1px solid rgb(255, 255, 255);
    }
  }
`;
