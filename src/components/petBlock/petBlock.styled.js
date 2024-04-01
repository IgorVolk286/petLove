import styled from 'styled-components';
import backgroundMob from '../../img/login-img-mobile.jpg';
import backgroundTablet from '../../img/login1x-tablet.jpeg';

export const CorgiDiv = styled.div`
  width: 335px;
  height: 280px;
  background-image: url(${backgroundMob});
  /* overflow: hidden; */
  border-radius: 30px;
  margin-bottom: 10px;
  position: relative;

  @media (min-width: 768px) {
    width: 704px;
    height: 302px;
    background-image: url(${backgroundTablet});
    border-radius: 60px;
  }
`;
