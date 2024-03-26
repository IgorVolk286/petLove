import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';

export const Wrap = styled.div`
  width: 375px;
  height: 812px;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
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

  /* @media (min-width: 768px) {
    font-size: 40px;
    line-height: 48px;
  } */
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
`;

export const Button = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 12px 120px;
  border-radius: 30px;
  background: rgb(246, 184, 61);
  color: #ffffff;
  margin-top: 30px;
  margin-bottom: 12px;

  &:hover {
    background: #fff4df;
    color: #f6b83d;
  }

  /* @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 190px;
    border-radius: 30px;
    background: rgb(16, 57, 49);
    color: #ffffff;
    margin-top: 22px; */
  /* 
  &:hover {
    background: rgba(16, 57, 49, 0.2);
    color: rgb(16, 57, 49);
  } */
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
    width: 34px;
    height: 18px;
    color: rgba(38, 38, 38, 0.5);
    font-family: Manrope;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: -3%;
    text-align: left;
  }
`;
export const DownText = styled.p`
  font-family: Manrope;
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: -3%;
  color: rgba(38, 38, 38, 0.5);
`;

export const A = styled.a`
  font-family: Manrope;
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: -3%;
  color: rgb(246, 184, 61);
`;
export const Div = styled.div`
  width: 100%;
  height: auto;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
  padding: 60px 20px;
`;
