// src/About.js
import logo from './assets/profile.png';
import React from 'react';
import styled from 'styled-components';
import { FaDev } from 'react-icons/fa';
import { FaComputer } from 'react-icons/fa6';

// Estilização
const AboutContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 50px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

const ProfileImage = styled.img`
  width: 150px; /* Ajuste o tamanho conforme necessário */
  height: auto;
  border-radius: 30%; /* Para tornar a imagem circular */
  margin-bottom: 20px; /* Espaço abaixo da imagem */
`;

const Name = styled.h2`
  font-size: 2rem;
  margin-bottom: 10px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); /* Sombra do texto */
  animation: float 2s ease-in-out infinite; /* Animação de flutuação */
  
  @keyframes float {
    0% { transform: translatey(0); }
    50% { transform: translatey(-10px); } /* Altura da flutuação */
    100% { transform: translatey(0); }
  }
`;

const Role = styled.h3`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 10px;
  overflow: hidden; /* Esconde o que ultrapassa */
  white-space: nowrap; /* Não permite quebra de linha */
  border-right: 3px solid ${({ theme }) => theme.text}; /* Cursor de digitação */
  animation: typing 4s steps(40, end) forwards, blink-caret 0.75s step-end infinite; /* Animações */

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: fit-content; /* A frase ficará fixa ao final da animação */
    }
  }

  @keyframes blink-caret {
    50% {
      border-color: transparent; /* Faz o cursor piscar */
    }
  }
`;

const AboutText = styled.p`
  max-width: 600px; /* Limite de largura do texto */
  text-align: center;
  margin-top: 20px;
`;

const About = () => {
  return (
    <AboutContainer>
      <ProfileImage src={logo} alt="Minha Foto" />
      <Name>Henrique Fernandes <FaComputer/> </Name>
      <Role>
        <FaDev /> Desenvolvedor Full Stack
      </Role>
      <AboutText>
        Sou um desenvolvedor full stack com experiência em criar aplicações web
        dinâmicas e responsivas. Tenho paixão por tecnologia e estou sempre
        aprendendo novas habilidades para me manter atualizado.
      </AboutText>
    </AboutContainer>
  );
};

export default About;
