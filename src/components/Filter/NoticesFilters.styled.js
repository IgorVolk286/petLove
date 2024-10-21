import styled from 'styled-components';
import { ReactComponent as IconLupa } from '../../img/search.svg';
import { ReactComponent as Line } from '../../img/Vector 1.svg';
import Select from 'react-select';
export const Div = styled.div`
  width: 335px;
  height: 378px;
  border-radius: 30px;
  background: rgb(255, 244, 223);
  padding: 20px;
`;
export const Selected = styled.select`
  width: 143px;
  border-radius: 30px;
  background: rgb(255, 255, 255);
  padding: 12px 43px 12px 12px;
  color: rgb(38, 38, 38);
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -3%;
  text-align: left;
  display: inline;
`;
export const Selected1 = styled.select`
  width: 100%;
  border-radius: 30px;
  background: rgb(255, 255, 255);
  padding: 12px 200px 12px 12px;
  color: rgb(38, 38, 38);
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -3%;
  text-align: left;
`;
export const Input = styled.input`
  width: 100%;
  height: 42px;
  padding: 12px 200px 12px 12px;
  box-sizing: border-box;
  border: 1px solid rgba(38, 38, 38, 0.15);
  border-radius: 30px;
  background: rgb(255, 255, 255);
  position: relative;
  &::placeholder {
    color: rgb(38, 38, 38);
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
export const Button = styled.button`
  background: transparent;
  top: 230px;
  right: 55px;
  position: absolute;
  @media (min-width: 768px) {
    top: 190px;
    right: 45px;
  }
`;
export const Icon = styled(IconLupa)`
  width: 12px;
  height: 12px;
`;

export const IconLine = styled(Line)`
  width: 100%;
  height: 10px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  gap: 12px;
`;
export const DivSel = styled.div`
  display: flex;
  gap: 5px;
`;
export const Radio = styled.input`
  border-radius: 30px;
  background: rgb(255, 255, 255);
  padding: 12px;
  &::placeholder {
    color: rgb(38, 38, 38);
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
export const ReactSelect = styled(Select)`
  .react-select__control {
    border: 1px solid #ccc; /* стиль рамки */
    border-radius: 30px; /* скругляем углы */
  }

  .react-select__menu {
    border: 1px solid #ccc; /* стиль рамки для выпадающего списка */
    border-top: none; /* убираем рамку сверху */
    border-radius: 20px; /* скругляем нижние углы */
  }

  .react-select__option {
    padding: 8px 12px; /* отступы внутри элементов списка */
    cursor: pointer; /* указатель при наведении */
  }

  .react-select__option:hover {
    background-color: #f0f0f0; /* изменение цвета при наведении */
  }
`;
