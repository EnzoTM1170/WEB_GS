import { Container, Row, Col, Carousel, Button } from "react-bootstrap";

function Home() {
  return (
    <Container className="py-5">
      <Row className="align-items-center">
        <Col lg={6} className="mb-4 mb-lg-0">
          <div>
            <h1 className=" font-weight-bold mb-4">
              Proteja os Oceanos, <br/>Preserve a Vida Marinha
            </h1>
            <p className=" mb-4">
              Junte-se a nós na luta contra a poluição marítima<br/> e a sobre-exploração dos recursos marinhos.
            </p>
            <Button
              variant="primary"
              size="lg"
              href="#instituicao"
              className="shadow-sm"
            >
              Apoie Nossa Causa
            </Button>
          </div>
        </Col>
        <Col lg={6} className="d-flex justify-content-center">
          <div className="carousel-container">
            <Carousel >
              <Carousel.Item>
                <img
                  className="d-block w-100 h-100"
                  src="p1.webp"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 h-100"
                  src="p2.jpg"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 h-100"
                  src="p3.jpg"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;