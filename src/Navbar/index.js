import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './styles';
  
import Gulf from '../assets/icons/Gulf.png'

// import Home from "../Screens/Home/index"
const Navbar = () => {
  return (
    <>
      <Nav>
      <Bars />
      <NavLink to='/' activeStyle>
      <img src={Gulf} style={{width: 60, height: 60,}} />
      </NavLink>
        <NavMenu>
          <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/packages' activeStyle>
            Packages
          </NavLink>
          <NavLink to='LoginForm' activeStyle>
            Join as a Supplier
          </NavLink>
          <NavLink to='AboutForm' activeStyle>
            About us
          </NavLink>
          <NavLink to='/blogs' activeStyle>
            Register
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/LoginForm'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;