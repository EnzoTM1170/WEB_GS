import Denuncia from './components/denuncia';
import DenunciaForm from './components/denuncia-form';
import { useState } from 'react';

function Denuncie() {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleHideModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Denuncia
        titulo="Faça sua Denúncia"
        descricao="Se você testemunhou ou tem conhecimento de alguma atividade ilegal, crime ambiental ou violação dos direitos humanos, não hesite em denunciar. Sua denúncia pode fazer a diferença na luta contra a injustiça e na proteção do meio ambiente e da sociedade."
        onDenunciar={handleShowModal}
        videoUrl="https://www.youtube.com/embed/vKALPSF7tbc"
      />
      <DenunciaForm
        show={showModal}
        onHide={handleHideModal}
        title="Formulário de Denúncia"
        successMessage="Sua denúncia foi registrada com sucesso. Obrigado por contribuir para um mundo melhor!"
      />
    </>
  );
}

export default Denuncie;