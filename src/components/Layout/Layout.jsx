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
  // IconLogoUser,
  // IconDiv,
  // ButtonlogOut,
  // Name,
  LogoPet,
  Burger,
  // Menu,
  ButtonMenu,
} from '../Layout/Layout.styled';
import { NavLink, Outlet } from 'react-router-dom';
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
        <ButtonMenu type="button" onClick={toggle}>
          <Burger />
        </ButtonMenu>
        {menu && (
          <MenuAuth menu={menu} toggle={toggle} color={'rgb(246, 184, 61)'} />
        )}
        {/* <Logo to="/"> Nanny.Services </Logo> */}

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
