import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import aliens from '../mockAlien';


const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  


  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">hotaliens</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/AlienIndex/">view matches</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">messages</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
              <img src= "https://www.flaticon.com/svg/static/icons/svg/1083/1083598.svg"></img>
              </DropdownToggle>
              <DropdownMenu right className = "rightdropdown">
                <DropdownItem>
                  edit profile
                </DropdownItem>
                <DropdownItem>
                  edit lightyear range
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  new profile
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}
export default Header;