import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const Img = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50px;
  margin-bottom: 20px;
`;
export const Title = styled.h2`
  color: rgb(38, 38, 38);
  font-family: Manrope;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -4%;
  text-align: left;
  margin-bottom: 14px;
`;
export const A = styled.a`
  color: rgba(38, 38, 38, 0.5);
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -2%;
  text-align: left;
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
export const Text = styled.p`
  color: rgb(38, 38, 38);
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -2%;
  text-align: left;
`;
export const Li = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;
export const Card = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 14px;
  border-radius: 15px;
  background: rgb(255, 255, 255);
  padding: 12px;
`;
export const CardUl = styled.ul`
  display: flex;
  flex-direction: column;

  gap: 8px;
`;
