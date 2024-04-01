import styled from 'styled-components';
import logoRich from '../../img/rich.jpg';
export const Div = styled.div`
  display: block;

  @media (min-width: 768px) {
    position: absolute;
    top: 270px;
    left: 64px;
    width: 300px;
    height: 121px;
    padding: 16px;
    display: flex;
    gap: 8px;
    align-items: flex-start;
    justify-content: center;
    border-radius: 20px;
    background: rgb(255, 255, 255);
  }
`;
export const DivLogo = styled.div`
  @media (min-width: 768px) {
    width: 60px;
    height: 60px;
    padding: 12px 14px 16px 14px;
    border-radius: 50%;
    background-image: url(${logoRich});
  }
`;
export const DivTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 48px;
`;

export const H2 = styled.h2`
  color: rgb(246, 184, 61);
  font-family: Manrope;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -3%;
  text-align: left;
`;

export const P = styled.p`
  color: rgba(38, 38, 38, 0.5);
  font-family: Manrope;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: -2%;
  text-align: left;
`;
export const Span = styled.span`
  color: rgb(38, 38, 38);
  font-family: Manrope;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: -2%;
  text-align: left;
`;

export const Content = styled.p`
  width: 194px;
  color: rgba(38, 38, 38, 0.8);
  font-family: Manrope;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: -2%;
  text-align: left;
`;
