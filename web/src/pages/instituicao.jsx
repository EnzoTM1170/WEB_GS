import { Container, Row, Col, Image } from "react-bootstrap";

function Instituicao() {
  return (
    <Container className="my-5">
      <Row className="align-items-center flex-column-reverse flex-md-row">
        <Col md={7} className="mb-4 mb-md-0">
          <h1 className="display-4 mb-4">Planeta Azul</h1>
          <p className="lead mb-4">
            A Planeta Azul é um projeto dedicado a proteger e restaurar os oceanos do mundo, garantindo a sobrevivência dos ecossistemas marinhos e de todas as formas de vida que neles habitam.
          </p>
          <hr className="mb-4" />
          <p>
            Somos uma plataforma dedicada à conservação dos oceanos, focada em informar e engajar o público na proteção dos ambientes marinhos. Formamos parcerias com organizações líderes globais para ampliar nossa influência e eficácia na luta contra a poluição oceânica e na promoção de práticas sustentáveis.
          </p>
          <p>
            Nosso compromisso é com a saúde dos oceanos, essenciais para a biodiversidade do planeta e para a vida humana. Buscamos inspirar ações que façam a diferença real na preservação destes ecossistemas vitais.
          </p>
          <p className="mb-4">
          Junte-se a nós para contribuir ativamente na proteção e recuperação dos oceanos.
          </p>
        </Col>
        <Col md={5} className="d-flex justify-content-center mb-4 mb-md-0">
          <Image
            src="sea-freight-junubin-logistics.jpg"
            fluid
            rounded
            className="shadow img-vertical"
            alt="Planeta Azul"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Instituicao;