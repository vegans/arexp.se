import React from 'react'
import Link from 'next/link'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'

const Link2 = ({href, children}) => (
  <Link href={href}>
    <a className="nav-link">{children}</a>
  </Link>
)

const DropdownItem = ({href, children}) => (
  <Link href={href}>
    <a className="dropdown-item">{children}</a>
  </Link>
)

const AppNav = () => (
  <Navbar bg="light" expand="lg">
    <Link href="/" passHref>
      <Navbar.Brand>Animal Reality Exposed</Navbar.Brand>
    </Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Link2 href="/find-group">Find a group</Link2>
        <Link2 href="/code-of-conduct">Code of conduct</Link2>
        <NavDropdown title="Material" id="basic-nav-dropdown">
          <DropdownItem href="/material/signs">Signs</DropdownItem>
          <a
            className="dropdown-item"
            target="_blank"
            rel="noopener noreferrer"
            href="https://foroutreach.com">
            Videos
          </a>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default AppNav
