import { Navbar, Nav, Container } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="light" expand="lg" className="py-3 shadow-sm">
      <Container>
        <Navbar.Brand href="#home">
          Planeta Azul
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="nav-link-custom">Home</Nav.Link>
            <Nav.Link href="#instituicao" className="nav-link-custom">Quem somos</Nav.Link>
            <Nav.Link href="#problema" className="nav-link-custom">Problema</Nav.Link>
            <Nav.Link href="#solucao" className="nav-link-custom">Solução</Nav.Link>
            <Nav.Link href="#denuncie" className="nav-link-custom">Denuncie</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;