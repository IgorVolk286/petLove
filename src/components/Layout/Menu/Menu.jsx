import {
  Cross,
  ButtonAuth,
  Buttons,
  ButtonClose,
  Div,
  DivButtons,
  NavLin,
  DivButtonsAuth,
  NavLinAuth,
} from '../../../components/Layout/Menu/Menu.styled';
import { useEffect } from 'react';

export const Menu = ({ menu, toggle, color }) => {
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
          <NavLin to="/news">News</NavLin>
        </Buttons>
        <Buttons type="button">Find pet</Buttons>
        <Buttons type="button">
          <NavLin to="/friends">Our friends</NavLin>
        </Buttons>
      </DivButtons>

      <DivButtonsAuth>
        <ButtonAuth type="button">
          <NavLinAuth to="/login"> LOGIN </NavLinAuth>
        </ButtonAuth>
        <ButtonAuth type="button">
          <NavLinAuth to="/register">REGISTRATION</NavLinAuth>
        </ButtonAuth>
      </DivButtonsAuth>
    </Div>
  );
};
