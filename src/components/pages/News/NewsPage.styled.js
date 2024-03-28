import styled from 'styled-components';
import { ReactComponent as IconLupa } from '../../../img/search.svg';

export const Icon = styled(IconLupa)`
  width: 12px;
  height: 12px;
`;

export const Button = styled.button`
  background: transparent;
  top: 190px;
  right: 32px;
  position: absolute;
`;
export const Input = styled.input`
  width: 100%;
  height: 42px;
  padding: 12px 270px 12px 12px;
  box-sizing: border-box;
  border: 1px solid rgba(38, 38, 38, 0.15);
  border-radius: 30px;
  background: rgb(249, 249, 249);
  position: relative;
  &::placeholder {
    color: rgba(38, 38, 38, 0.5);
    font-family: Manrope;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: -3%;
    text-align: left;
  }
`;

export const Title = styled.h1`
  color: rgb(38, 38, 38);
  font-family: Manrope;
  font-size: 28px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -3%;
  text-align: left;
  margin-bottom: 20px;
  margin-top: 60px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 24px;
`;
