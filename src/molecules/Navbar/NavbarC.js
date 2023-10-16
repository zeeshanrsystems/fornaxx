import React, { useState } from 'react';
import './NavbarC.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import ModalC from '../../molecules/Modal/ModalC';

function NavbarC() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Navbar className='navbarc' expand="md" container={true}>
        <NavbarBrand href="/">FORNAX</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                File
              </DropdownToggle>
              <DropdownMenu className="dropdown-wrapper" right>
                <DropdownItem onClick={openModal}>Configure</DropdownItem>
                <DropdownItem>Save</DropdownItem>
                <DropdownItem>Load</DropdownItem>
                <DropdownItem>Mass Update</DropdownItem>
                <DropdownItem>Exit</DropdownItem>
                <DropdownItem>Run</DropdownItem>
                <DropdownItem>Stop</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            {/* ... other dropdowns */}
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Edit
              </DropdownToggle>
              <DropdownMenu className="dropdown-wrapper" right>
                <DropdownItem>Configure</DropdownItem>
                <DropdownItem>Save</DropdownItem>
                <DropdownItem>Load</DropdownItem>
                <DropdownItem>Mass Update</DropdownItem>
                <DropdownItem>Exit</DropdownItem>
                <DropdownItem>Run</DropdownItem>
                <DropdownItem>Stop</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Report
              </DropdownToggle>
              <DropdownMenu className="dropdown-wrapper" right>
                <DropdownItem>Configure</DropdownItem>
                <DropdownItem>Save</DropdownItem>
                <DropdownItem>Load</DropdownItem>
                <DropdownItem>Mass Update</DropdownItem>
                <DropdownItem>Exit</DropdownItem>
                <DropdownItem>Run</DropdownItem>
                <DropdownItem>Stop</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Zeeshan Khan</NavbarText>
        </Collapse>
      </Navbar>
      
      <ModalC isOpen={isModalOpen} toggle={closeModal} />
    </div>
    
  );
}

export default NavbarC;
