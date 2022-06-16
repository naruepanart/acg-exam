import { Nav } from "react-bootstrap";

const Navbar = () => {
  return (
    <div className="mb-3">
      <Nav defaultActiveKey="/" as="ul">
        <Nav.Item as="li">
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="/history">History</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Navbar;
