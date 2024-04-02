import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media (min-width: 768px) {
    gap: 0px;
  }
`;

export const Img = styled.img`
  width: 335px;
  height: 190px;
  border-radius: 15px;
  /* margin-bottom: 20px; */

  @media (min-width: 768px) {
    width: 340px;
    height: 226px;
    border-radius: 15px;
    margin-bottom: 28px;
  }
`;
export const Title = styled.h2`
  color: rgb(38, 38, 38);
  font-family: Manrope;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -3%;
  text-align: left;
  margin-bottom: 12px;

  @media (min-width: 768px) {
    font-size: 20px;
    font-weight: 700;
    line-height: 26px;
    /* margin-bottom: 14px; */
  }
`;
export const Text = styled.p`
  color: rgb(38, 38, 38);
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -2%;
  text-align: left;
  margin-bottom: 19px;
  @media (min-width: 768px) {
    font-size: 16px;

    line-height: 20px;
  }
`;
export const Button = styled.a`
  background: transparent;
  color: rgb(246, 184, 61);
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -2%;
  text-align: left;
  text-decoration-line: underline;
`;

export const Span = styled.span`
  color: rgba(38, 38, 38, 0.5);
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -2%;
`;
export const Div = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Li = styled.li`
  @media (min-width: 768px) {
    width: 340px;
    height: auto;
    border-radius: 15px;
    margin-bottom: 28px;
  }
`;
