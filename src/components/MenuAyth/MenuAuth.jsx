import {
  Cross,
  ButtonAuth,
  Buttons,
  ButtonClose,
  Div,
  DivButtons,
  NavLin,
} from './MenuAuth.styled';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
export const MenuAuth = ({ menu, toggle, color }) => {
  useEffect(() => {
    const onEscapeClick = e => {
      if (e.code === 'Escape') {
        toggle();
      }
    };
    window.addEventListener('keydown', onEscapeClick);
    return () => {
      window.removeEventListener('keydown', onEscapeClick);
    };
  }, [toggle]);

  return (
    <Div menu={menu} color={color}>
      <ButtonClose type="button" onClick={toggle}>
        <Cross />
      </ButtonClose>
      <DivButtons>
        <Buttons type="button">
          <Link to="/news">News</Link>
        </Buttons>
        <Buttons type="button">Find pet</Buttons>
        <Buttons type="button">Our friends</Buttons>
      </DivButtons>

      <div>
        <ButtonAuth type="button">
          <NavLin to="/login"> LOGIN </NavLin>
        </ButtonAuth>
        <ButtonAuth type="button">
          <NavLin to="/register">REGISTRATION</NavLin>
        </ButtonAuth>
      </div>
    </Div>
  );
};
