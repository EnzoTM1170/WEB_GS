import { Container, Row, Col, Button } from 'react-bootstrap';

// eslint-disable-next-line react/prop-types
function Denuncia({ titulo, descricao, videoUrl, onDenunciar  }) {
  return (
    <Container className="py-5">
      <Row className="align-items-center">
        <Col md={6}>
          <h1>
            {titulo}
          </h1>
          <p>{descricao}</p>
          <Button variant="primary" onClick={onDenunciar}>
            Denunciar
          </Button>
        </Col>
        <Col md={6}>
          <div className='videoWrapper'>
            <iframe
              width={"100%"}
              height={"100%"}
              src={videoUrl}
              title={titulo}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Denuncia;