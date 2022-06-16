import React from "react";
import { Nav } from "react-bootstrap";

const Navbar = () => {
  return (
    <div>
      <Nav defaultActiveKey="/" as="ul">
        <Nav.Item as="li">
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="/history">History</Nav.Link>
        </Nav.Item>
      </Nav>
      <hr/>
    </div>
  );
};

export default Navbar;
