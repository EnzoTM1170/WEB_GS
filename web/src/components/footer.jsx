import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-primary text-white py-5">
      <Container>
        <Row>
          <Col xs={12} md={4} className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-3">Sobre Nós</h5>
            <p className="mb-0">
              Planeta Azul é uma organização dedicada à preservação dos oceanos e de seus ecossistemas.
            </p>
            <p className="mb-0">©2024 Todos os direitos reservados.</p>
          </Col>
          <Col xs={12} md={4} className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-3">Links Úteis</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#inicio" className="text-white">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-white">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#projetos" className="text-white">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#contato" className="text-white">
                  Contato
                </a>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={4}>
            <h5 className="text-uppercase mb-3">Siga-nos</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#" className="text-white">
                  <i className="fab fa-facebook-f me-2"></i>Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  <i className="fab fa-twitter me-2"></i>Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  <i className="fab fa-instagram me-2"></i>Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  <i className="fab fa-linkedin me-2"></i>LinkedIn
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;