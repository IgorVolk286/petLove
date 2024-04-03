import { NavLink } from 'react-router-dom';
import {
  Div,
  Content,
  Img,
  P,
  Button,
  DivBtn,
} from '../Page404/Page404.styled';

export const Page404 = () => {
  return (
    <Div>
      <Content>
        <Img></Img>
        <DivBtn>
          <P>Ooops! This page not found &#58;&#40;</P>
          <Button>
            <NavLink to="/home">To home page</NavLink>
          </Button>
        </DivBtn>
      </Content>
    </Div>
  );
};
