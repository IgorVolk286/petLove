import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';
import { NavLink } from 'react-router-dom';
export const Wrap = styled.div`
  width: 335px;
  height: auto;
  margin-top: 26px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    width: 100%;
    height: auto;
  }
  @media (min-width: 1280px) {
    width: 1280px;
    display: flex;
    flex-direction: row;
    gap: 32px;
  }
`;
export const ErrorMes = styled(ErrorMessage)`
  color: red;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;
export const Title = styled.h1`
  color: rgb(38, 38, 38);
  font-family: Manrope;
  font-size: 28px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -4%;
  text-align: left;
  margin-bottom: 12px;
  @media (min-width: 768px) {
    font-size: 54px;
    line-height: 54px;
    margin-bottom: 16px;
  }
`;
export const P = styled.p`
  color: rgb(38, 38, 38);
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -2%;
  text-align: left;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    margin-bottom: 32px;
  }
`;

export const Button = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 12px 99px;
  border-radius: 30px;
  background: rgb(246, 184, 61);
  color: #ffffff;
  margin-top: 30px;
  margin-bottom: 12px;

  &:hover {
    background: #fff4df;
    color: #f6b83d;
  }
  @media (min-width: 768px) {
    padding: 16px 180px;
    font-family: Manrope;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: -3%;
    text-align: left;
    margin-bottom: 16px;
    margin-top: 64px;
  }
`;
export const Label = styled.label``;
export const Input = styled(Field)`
  width: 295px;
  height: 42px;
  box-sizing: border-box;
  border: 1px solid rgba(38, 38, 38, 0.15);
  border-radius: 30px;
  margin: 10px 0px;
  padding: 12px;

  &::placeholder {
    height: 18px;
    color: rgba(38, 38, 38, 0.5);
    font-family: Manrope;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: -3%;
    text-align: left;
  }
  @media (min-width: 768px) {
    padding: 16px 250px 16px 16px;
    width: 100%;
    height: 52px;
  }
`;
export const DownText = styled.p`
  font-family: Manrope;
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: -3%;
  color: rgba(38, 38, 38, 0.5);
  text-align: center;
  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const NavLinka = styled(NavLink)`
  font-family: Manrope;
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: -3%;
  color: rgb(246, 184, 61);
  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 20px;
  }
`;
export const Div = styled.div`
  width: 100%;
  height: 442px;
  margin-left: auto;
  margin-right: auto;
  padding: 60px 20px;
  border-radius: 30px;
  background: rgb(255, 255, 255);

  @media (min-width: 768px) {
    padding: 30px 140px;
    border-radius: 60px;
    height: auto;
  }
  @media (min-width: 1280px) {
    width: 592px;
    height: 654px;
    padding: 118px 84px;
    margin-left: 0px;
    margin-right: 0px;
  }
`;
