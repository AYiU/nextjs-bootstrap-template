import React, { useState } from "react";
import Link from "next/link";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from "reactstrap";

export default function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const subMenuToggle = () => setDropdownOpen(!dropdownOpen);

  const MyNavBarBrand = React.forwardRef((props, ref) => {
    return <NavbarBrand {...props}>nextjs-ts-bootstrap-template</NavbarBrand>;
  });

  return (
    <Navbar color="light" light expand="md">
      <Link href="/" passHref>
        <MyNavBarBrand />
      </Link>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <Link href="/" passHref>
              <NavLink>和諧粉彩</NavLink>
            </Link>
          </NavItem>
          <Dropdown nav isOpen={dropdownOpen} toggle={subMenuToggle}>
            <DropdownToggle nav caret>
              和諧作品
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>我的作品</DropdownItem>
              <DropdownItem header>學生作品</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavItem>
            <Link href="/" passHref>
              <NavLink>找我畫畫</NavLink>
            </Link>
          </NavItem>
        </Nav>
        <NavbarText></NavbarText>
      </Collapse>
    </Navbar>
  );
}
