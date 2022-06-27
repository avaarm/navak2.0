import React from 'react'
import { FaBars } from 'react-icons/fa'
import {
  Nav, NavbarContainer, Navlogo,
  MobileIcon, NavMenu, NavItem, NavLinks,
  NavBtn, NavBtnLink
} from './NavbarElements'


const Navbar = ({toggle}) => {
  return (
    // putting fragments to avoid a bunch of divs
    <>
      <Nav>
        <NavbarContainer>
          <Navlogo to='/'>NaVak</Navlogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='about'>About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='discover'>Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='services'>Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='signup'>Signup</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar;


