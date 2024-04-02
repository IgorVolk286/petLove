import styled from 'styled-components';

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
    color: rgb(38, 38, 38);
    font-size: 54px;
    font-weight: 700;
    line-height: 54px;
    margin-top: 85px;
    margin-bottom: 44px;
  }
  @media (min-width: 1280px) {
    margin-bottom: 60px;
    margin-top: 96px;
    margin-left: 32px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 24px;
  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 0px;
  }
  @media (min-width: 1280px) {
    gap: 20px;
    margin-left: 32px;
  }
`;
export const Div = styled.div`
  width: 375px;
  height: auto;

  @media (min-width: 768px) {
    width: 768px;
    height: auto;
  }
  @media (min-width: 1280px) {
    width: 1280px;
  }
`;
