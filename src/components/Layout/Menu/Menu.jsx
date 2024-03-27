import {
  Cross,
  ButtonAuth,
  Buttons,
  ButtonClose,
  Div,
  DivButtons,
  NavLin,
} from '../Menu/Menu.styled';
import { useEffect } from 'react';

export const Menu = ({ menu, toggle }) => {
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
    <Div menu={menu}>
      <ButtonClose type="button" onClick={toggle}>
        <Cross />
      </ButtonClose>
      <DivButtons>
        <Buttons type="button">News</Buttons>
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