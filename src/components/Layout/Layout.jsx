import {
  // Logo,
  // Link,
  Header,
  // ButtonLogin,
  // ButtonReg,
  // DivButton,
  // NavList,
  // Nav,
  Container,
  NavLin,
  ButtonAuth,
  DivNavs,
  // IconLogoUser,
  // IconDiv,
  // ButtonlogOut,
  // Name,
  LogoPet,
  Burger,
  // Menu,
  ButtonMenu,
  DivButtons,
  DiVNav,
  Buttons,
} from '../Layout/Layout.styled';
import { NavLink, Outlet, Link } from 'react-router-dom';
import { useState } from 'react';
import { MenuAuth } from '../../components/MenuAyth/MenuAuth';
export const Layout = () => {
  const [menu, setMenu] = useState(false);

  const toggle = e => {
    setMenu(!menu);
  };

  //   const navigate = useNavigate();
  //   const dispatch = useDispatch();
  //   const isLogin = useSelector(selectIsLogin);
  //   const name = useSelector(selectName);
  //   const [isOpen, setIsOpen] = useState(false);
  //   const [isOpenReg, setIsOpenReg] = useState(false);

  //   const [menu, setMenu] = useState(false);

  //   const toggleModal = e => {
  //     setIsOpen(!isOpen);
  //   };
  //   const toggleModalReg = e => {
  //     setIsOpenReg(!isOpenReg);
  //     document.body.style.overflow = 'hidden';
  //   };
  //   const logOuts = e => {
  //     const auth = getAuth();
  //     signOut(auth)
  //       .then(() => {
  //         dispatch(logOut());
  //         navigate('/', { replace: true });
  //         setMenu(false);
  //         setIsOpen(false);
  //       })
  //       .catch(error => {});
  //   };
  //   const menuRef = useRef(null);
  //   useOutSide(menuRef, () => {
  //     setMenu(false);
  //   });

  return (
    <Container>
      <Header>
        <NavLink to="/home">
          <LogoPet />
        </NavLink>
        <DivNavs>
          <DivButtons>
            <Buttons type="button">
              <Link to="/news">News</Link>
            </Buttons>
            <Buttons type="button">Find pet</Buttons>
            <Buttons type="button">
              <Link to="/friends">Our friends</Link>
            </Buttons>
          </DivButtons>
          <DiVNav>
            <ButtonAuth type="button">
              <NavLin to="/login"> LOGIN </NavLin>
            </ButtonAuth>
            <ButtonAuth type="button">
              <NavLin to="/register">REGISTRATION</NavLin>
            </ButtonAuth>
          </DiVNav>
          <ButtonMenu type="button" onClick={toggle}>
            <Burger />
          </ButtonMenu>
        </DivNavs>
        {menu && (
          <MenuAuth menu={menu} toggle={toggle} color={'rgb(246, 184, 61)'} />
        )}

        {/* {isLogin ? (
            <Nav>
              <NavList>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/nannies">Nannies</Link>
                </li>
                <li>
                  <Link to="/favorites">Favorites</Link>
                </li>
              </NavList>
              <ButtonMenu type="button" onClick={() => setMenu(!menu)}>
                <Burger />
              </ButtonMenu> */}
        {/* {menu && (
                <Menu ref={menuRef}>
                  <ButtonlogOut
                    type="button"
                    onClick={() => {
                      setMenu(!menu);
                      logOuts();
                    }}
                  >
                    Log Out
                  </ButtonlogOut>
                </Menu>
              )}
              <DivButton>
                <IconDiv>
                  <IconLogoUser />
                </IconDiv>
                <Name>{name}</Name>
                <ButtonlogOut onClick={logOuts}>Log Out</ButtonlogOut>
              </DivButton>
            </Nav>
          ) : (
            <Nav>
              <NavList>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/nannies">Nannies</Link>
                </li>
              </NavList>
              <ButtonMenu type="button" onClick={() => setMenu(!menu)}>
                <Burger />
              </ButtonMenu>
              {menu && (
                <Menu ref={menuRef}>
                  <ButtonLogin
                    type="button"
                    onClick={() => {
                      setIsOpen(true);
                      setMenu(!menu);
                    }}
                  >
                    Log In
                  </ButtonLogin>

                  <ButtonReg type="button" onClick={() => setIsOpenReg(true)}>
                    Registration
                  </ButtonReg>
                </Menu> */}
        {/* )} */}

        {/* <DivButton>
                <ButtonLogin type="button" onClick={() => setIsOpen(true)}>
                  Log In
                </ButtonLogin>
                {isOpen && (
                  <Modalca toggleModal={toggleModal}>
                    <Login />
                  </Modalca>
                )}
                <ButtonReg type="button" onClick={() => setIsOpenReg(true)}>
                  Registration
                </ButtonReg>
                {isOpenReg && (
                  <Modalca toggleModal={toggleModalReg}>
                    <RegistrationForm toggleModal={toggleModalReg} />
                  </Modalca>
                )}
              </DivButton>
            </Nav>
          )} */}
      </Header>

      <main>
        <Outlet />
      </main>
    </Container>
  );
};
