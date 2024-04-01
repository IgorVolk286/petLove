import styled from 'styled-components';
import { ReactComponent as IconLupa } from '../../../img/search.svg';

export const Icon = styled(IconLupa)`
  width: 12px;
  height: 12px;
`;
export const DivSearch = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 91px;
    margin-bottom: 44px;
  }
`;
export const Button = styled.button`
  background: transparent;
  top: 190px;
  right: 32px;
  position: absolute;
  @media (min-width: 768px) {
    top: 190px;
    right: 45px;
  }
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
  @media (min-width: 768px) {
    padding: 14px 165px 14px 14px;
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

  @media (min-width: 768px) {
    margin: 0px;
    font-size: 54px;
    line-height: 54px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 24px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    flex-direction: row;
    margin-top: 0px;
    flex-wrap: wrap;
    flex-basis: 340px;
  }
`;
export const Div = styled.div`
  width: 100%;
  height: auto;
`;
