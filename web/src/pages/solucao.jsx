import { Container, Row, Col } from "react-bootstrap";

function Solucao() {
 return (
   <section className="solucao">
     <Container>
       <Row>
         <Col>
           <h1 className="display-4 mb-4 text-center">A Solução para os Oceanos</h1>
           <p className="lead text-center mb-5">
             Para enfrentar os desafios que os oceanos estão enfrentando, é necessária uma abordagem abrangente e colaborativa, envolvendo governos, organizações não governamentais, empresas e indivíduos.
           </p>
           <Row className="solucao-detalhe">
             <Col md={4}>
               <h2 className="h2">Redução da Poluição</h2>
               <p>
               Minimize o consumo de produtos plásticos descartáveis, como sacolas, canudos e embalagens. Siga as diretrizes locais para reciclagem de plásticos e descarte apropriadamente os itens recicláveis.
               </p>
             </Col>
             <Col md={4}>
               <h2 className="h2">Produtos químicos</h2>
               <p>
               Educar as indústrias sobre o impacto ambiental de seus resíduos e promover práticas de produção mais limpas. Implementar sistemas robustos de monitoramento e fiscalização para garantir que as indústrias cumpram com as normas ambientais.
               </p>
             </Col>
             <Col md={4}>
               <h2 className="h2">Despejo de esgoto</h2>
               <p>
               Assegurar que todo esgoto seja tratado adequadamente antes de ser liberado no ambiente. Conscientizar sobre os impactos do despejo de esgoto no oceano e promover práticas sustentáveis na gestão de resíduos.
               </p>
             </Col>
           </Row>
         </Col>
       </Row>
     </Container>
   </section>
 );
}

export default Solucao;