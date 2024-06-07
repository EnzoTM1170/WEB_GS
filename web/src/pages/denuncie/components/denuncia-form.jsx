import { useState } from 'react';
import { Modal, Form, Alert, Button } from 'react-bootstrap';

// eslint-disable-next-line react/prop-types
function DenunciaForm({ show, onHide, title, successMessage }) {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    descricao: '',
    anonimo: false,
  });
  const [errors, setErrors] = useState({});
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, anonimo: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (!formData.descricao.trim()) {
      errors.descricao = 'O campo Descrição é obrigatório';
    }

    if (Object.keys(errors).length === 0) {
      // Enviar dados da denúncia
      console.log('Dados da denúncia:', formData);

      // Código para enviar a denúncia para o servidor

      fetch('https://script.google.com/macros/s/AKfycbx6xrFt5my3X04soemX5wqsu2UptxXQvqp3k9U45Ye9p-1uP4DCOx3h8wSOkcJRSR3P/exec',{
        method: 'POST',
        body: JSON.stringify(formData)
      }).then(response => {
        console.log('response', response);
      });

      setShowConfirmation(true);
    } else {
      setErrors(errors);
    }
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {showConfirmation ? (
          <Alert variant="success">
            <Alert.Heading>Denúncia registrada!</Alert.Heading>
            <p>{successMessage}</p>
          </Alert>
        ) : (
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formNome">
              <Form.Label>Nome Completo (opcional)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite seu nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email (opcional)</Form.Label>
              <Form.Control
                type="email"
                placeholder="Digite seu email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formTelefone">
              <Form.Label>Telefone (opcional)</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Digite seu telefone"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formDescricao">
              <Form.Label>Descrição da Denúncia</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="descricao"
                value={formData.descricao}
                onChange={handleChange}
                isInvalid={!!errors.descricao}
              />
              <Form.Control.Feedback type="invalid">
                {errors.descricao}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formAnonimo">
              <Form.Check
                type="checkbox"
                label="Denunciar anonimamente"
                name="anonimo"
                checked={formData.anonimo}
                onChange={handleCheckboxChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit" id="denunciar">
              Denunciar
            </Button>
          </Form>
        )}
      </Modal.Body>
    </Modal>
  );
}

export default DenunciaForm; 