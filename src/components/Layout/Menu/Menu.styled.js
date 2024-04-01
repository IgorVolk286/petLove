import styled from 'styled-components';
import { ReactComponent as IconClose } from '../../../img/x.svg';
import { NavLink } from 'react-router-dom';
export const Cross = styled(IconClose)`
  width: 16px;
  height: 16px;
  @media (min-width: 768px) {
    width: 36px;
    height: 36px;
  }
`;
export const NavLin = styled(NavLink)`
  color: rgb(38, 38, 38);
  font-family: Manrope;
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: -3%;
  &:hover {
    color: #f6b83d;
  }
`;
export const ButtonClose = styled.button`
  position: absolute;
  top: 30px;
  right: 15px;
  background: transparent;
`;
export const Buttons = styled.button`
  padding: 15px 20px;
  border: 1px solid rgba(38, 38, 38, 0.15);
  border-radius: 30px;
  color: rgb(38, 38, 38);
  &:hover {
    border: 1px solid rgb(246, 184, 61);
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
  background: rgb(246, 184, 61);

  margin-top: 30px;
  margin-bottom: 12px;

  &:hover {
    background: #fff4df;
    color: #f6b83d;
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

  background: ${props => props.color};
  position: absolute;
  bottom: -20px;
  top: ${props => (props.menu ? '3px' : '-180px')};
  right: 0px;
  transition: left 250 ease;
  @media (min-width: 768px) {
    width: 374px;
    height: 100%;
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
export const NavLinAuth = styled(NavLink)`
  color: rgb(255, 255, 255);
  font-family: Manrope;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -3%;
  text-align: left;
  &:hover {
    color: rgb(246, 184, 61);
  }
`;
