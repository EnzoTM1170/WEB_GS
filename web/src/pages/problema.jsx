import { Container, Row, Col } from "react-bootstrap";

function Problema() {
  return (
    <section className="problema">
      <Container>
        <Row>
          <Col>
            <h1 className="display-4 mb-4 text-center">O Problema dos Oceanos</h1>
            <p className="lead text-center mb-5">
              Os oceanos estão enfrentando uma crise sem precedentes devido à ação humana. A poluição marinha, a contaminação quimica e o despejo de esgoto estão causando danos irreparáveis aos ecossistemas marinhos e ameaçando a biodiversidade.
            </p>
            <Row className="problema-detalhe">
              <Col md={4}>
                <h2 className="h2">Poluição por Plásticos</h2>
                <p>
                  Um dos maiores poluentes dos oceanos, com milhões de toneladas despejadas anualmente. Esse material não biodegradável pode sufocar ou envenenar seres vivos.
                </p>
              </Col>
              <Col md={4}>
                <h2 className="h2">Produtos químicos</h2>
                <p>
                Substâncias químicas, como pesticidas, metais pesados e poluentes industriais, são descartadas nos oceanos, alterando a qualidade da água e afetando a vida marinha.
                </p>
              </Col>
              <Col md={4}>
                <h2 className="h2">Esgoto</h2>
                <p>
                O despejo de esgoto não tratado nos oceanos contamina a água com bactérias, nutrientes e produtos químicos, afetando os ecossistemas aquáticos e podendo causar doenças.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Problema;