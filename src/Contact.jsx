import React, { useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import emailjs from 'emailjs-com';
import envelope from '/envelope.png';
import { FaEnvelope } from 'react-icons/fa';

const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

const ContactContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  flex-direction: column;
  
  @media (min-width: 768px) {
    flex-direction: row; 
  }
`;

const Envelope = styled.img`
  height: auto;
  width: 30%; 
  animation: ${float} 2s ease-in-out infinite;
  margin-bottom: 30px; 
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: white;

  @media (min-width: 768px) {
    margin-bottom: 0; 
    margin-right: 50px; 
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px; 
  width: 100%;
  max-width: 600px; 
`;

const FormTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 2rem; 
  margin-bottom: 20px;
  color: ${({ theme }) => theme.text};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`;

const Input = styled.input`
  padding: 15px; 
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.text};
  outline: none;
  font-size: 1rem; 
`;

const TextArea = styled.textarea`
  padding: 15px; 
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.text};
  outline: none;
  resize: vertical;
  font-size: 1rem; 
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.primary};
  padding: 15px; 
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.3rem;
  transition: background-color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.buttonColorLDhover};
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  text-align: center;
`;

const ModalButton = styled.button`
  background-color: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.primary};
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 15px;
  transition: background-color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.primary};
  }
`;

const Contact = () => {
  const form = useRef();
  const [modalVisible, setModalVisible] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_yt49clh',
      'template_dkwnzom',
      form.current,
      'tC5n0pg5GZANEq-KZ'
    )
      .then((result) => {
        setModalVisible(true);
      })
      .catch((error) => {
        alert('Erro ao enviar email, tente novamente mais tarde.');
      });
    e.target.reset();
  };

  const closeModal = () => {
    setModalVisible(false); 
  };

  return (
    <ContactContainer id='contact'>
      <Envelope src={envelope} />
      <FormContainer>
        <FormTitle>
          <FaEnvelope size={30} /> Fale comigo
        </FormTitle>
        <Form ref={form} onSubmit={sendEmail}>
          <Input type="text" name="name" placeholder="Nome" required />
          <Input type="text" name="subject" placeholder="Assunto" required />
          <Input type="email" name="email" placeholder="Email" required />
          <TextArea name="message" rows="4" placeholder="Digite sua mensagem" required />
          <Button type="submit">Enviar</Button>
        </Form>
      </FormContainer>

      {modalVisible && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <h2>Email Enviado!</h2>
            <p>Obrigado pelo contato, irei responder o mais rapido possivel!</p>
            <ModalButton onClick={closeModal}>Fechar</ModalButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </ContactContainer>
  );
};

export default Contact;
