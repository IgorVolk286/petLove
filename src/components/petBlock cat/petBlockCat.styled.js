import styled from 'styled-components';
import backgroundMob from '../../img/cat-registration1x.jpg';
import backgroundTablet from '../../img/jack-tablet1x.jpg';
import backgroundDecktop from '../../img/registration-decktop1x.png';
export const CatDiv = styled.div`
  width: 335px;
  height: 280px;
  background-image: url(${backgroundMob});

  border-radius: 30px;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    width: 704px;
    height: 302px;
    background-image: url(${backgroundTablet});
    border-radius: 60px;
  }
  @media (min-width: 1280px) {
    width: 592px;
    height: 654px;
    background-image: url(${backgroundDecktop});
    border-radius: 60px;
  }
`;
