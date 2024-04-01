import styled from 'styled-components';
import { ReactComponent as IconClose } from '../../img/x.svg';
import { NavLink } from 'react-router-dom';
export const Cross = styled(IconClose)`
  width: 16px;
  height: 16px;
  @media (min-width: 768px) {
    width: 18px;
    height: 18px;
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
    color: rgb(246, 184, 61);
  }
`;
export const ButtonClose = styled.button`
  position: absolute;
  top: 30px;
  right: 15px;
  background: transparent;
  @media (min-width: 768px) {
    top: 25px;
    right: 18px;
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

  @media (min-width: 768px) {
    padding: 12px 20px;
    width: 169px;
  }
`;

export const DivButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  margin: 200px 30px 280px 30px;

  @media (min-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    gap: 10px;
    margin-bottom: 380px;
    margin-top: 350px;
  }
`;
export const ButtonAuth = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 12px 40px;
  border-radius: 30px;
  background: transparent;
  color: rgb(255, 255, 255);
  margin-top: 30px;
  margin-bottom: 12px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  &:hover {
    background: rgb(255, 244, 223);
    color: rgb(246, 184, 61);
  }

  @media (min-width: 768px) {
    padding: 12px 40px;
  }
`;
export const Div = styled.div`
  width: 218px;
  height: 812px;
  padding: 36px 20px 40px 20px;
  z-index: 5000;
  position: relative;
  background: ${props => props.color};
  width: 218px;
  height: 812px;
  position: absolute;
  bottom: -20px;
  top: ${props => (props.menu ? '3px' : '-180px')};
  right: 0px;
  transition: left 250 ease;

  @media (min-width: 768px) {
    width: 374px;
    height: 1024px;
    padding: 40px 49px;
  }
`;
export const DivButtonsAuth = styled.div`
  @media (min-width: 768px) {
    display: flex;
    gap: 8px;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
  }
`;
