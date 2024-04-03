import img from '../../../img/404.png';
import imgTablet from '../../../img/404tablet.png';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Div = styled.div`
  width: 335px;
  height: 712px;
  border-radius: 30px;
  background: rgb(246, 184, 61);
  padding: 245px 33px;
  margin-top: 26px;

  @media (min-width: 768px) {
    width: 704px;
    height: 878px;
    padding: 221px 32px;
    margin-top: 32px;
  }
  @media (min-width: 1280px) {
    padding: 109px 283px;
    width: 1216px;
    height: 654px;
    margin-top: 43px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 20px;  */
  margin-top: auto;
  margin-bottom: auto;
`;
export const Img = styled.div`
  background-image: url(${img});
  background-repeat: no-repeat;
  width: 269px;
  height: 120px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    width: 640px;
    height: 300px;
    margin-bottom: 20px;
    background-image: url(${imgTablet});
  }
  @media (min-width: 1280px) {
    margin-bottom: 40px;
  }
`;
export const P = styled.p`
  color: rgb(255, 255, 255);
  font-family: Manrope;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -3%;
  text-align: left;
  margin-bottom: 20px;

  @media (min-width: 1280px) {
    font-size: 24px;
    line-height: 28px;
  }
`;

export const Button = styled.button`
  display: block;
  width: auto;
  color: rgb(246, 184, 61);
  font-family: Manrope;
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: -3%;
  text-align: left;
  background-color: rgb(255, 244, 223);
  padding: 12px 30px;
  border-radius: 30px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;

  &:hover {
    color: rgb(255, 244, 223);
    background-color: #fbe7c1;
  }
`;
export const DivBtn = styled.div`
  margin-left: auto;
  margin-right: auto;
`;
