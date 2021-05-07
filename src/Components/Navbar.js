import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Navegacion = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar className='bg-dark' color="faded" light>
        <NavbarBrand href="/" className="text-white">Academia Fundación Esplai</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="bg-light" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink className="text-white" href="/classes/">Classes</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-white" href="/professors/">Professors</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-white" href="/alumnes/" >Alumnes</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navegacion;