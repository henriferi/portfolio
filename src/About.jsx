import logo from './assets/profile.png';
import React from 'react';
import styled from 'styled-components';
import { FaDatabase, FaDev, FaDocker, FaDownload, FaHtml5, FaNodeJs } from 'react-icons/fa';
import { FaComputer } from 'react-icons/fa6';
import { FaWhatsapp, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const AboutContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  padding: 200px 20px; 

  @media (max-width: 768px) { 
    padding: 20px 0;
    flex-direction: column; 
  }
`;

const ProfileImage = styled.img`
  width: 500px;
  height: auto;
  border-radius: 30%;
  margin-right: 30px;

  @media (max-width: 768px) {
    width: 300px;
    margin-right: 0; 
    margin-bottom: 20px; 
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    align-items: center; 
  }
`;

const Name = styled.h2`
  font-size: 2rem;
  margin-bottom: 10px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  animation: float 2s ease-in-out infinite;

  @keyframes float {
    0% { transform: translatey(0); }
    50% { transform: translatey(-10px); }
    100% { transform: translatey(0); }
  }
`;

const Role = styled.h3`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 10px;
  overflow: hidden;
  white-space: nowrap;
  border-right: 3px solid ${({ theme }) => theme.text};
  animation: typing 4s steps(40, end) forwards, blink-caret 0.75s step-end infinite;

  @keyframes typing {
    from { width: 0; }
    to { width: fit-content; }
  }

  @keyframes blink-caret {
    50% { border-color: transparent; }
  }
`;

const AboutText = styled.p`
  max-width: 600px;
  line-height: 1.6; 
  margin-top: 20px;
  margin-bottom: 20px; 
  white-space: pre-line; 

  @media (max-width: 768px) {
    text-align: center; 
  }
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: row; 
  }
`;

const IconLink = styled.a`
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.iconsContact};
  }
`;

const DownloadButton = styled.a`
  background-color: ${({ theme }) => theme.buttonBgLD};
  color: ${({ theme }) => theme.buttonColorLD};
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  margin-left: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.buttonColorLDhover}; 
  }
`;

const About = () => {
  return (
    <AboutContainer id='about'>
      <ProfileImage src={logo} alt="Minha Foto" />
      <TextContainer>
        <Name>Henrique Fernandes <FaComputer /></Name>
        <Role>
          <FaDev /> Desenvolvedor Full Stack
        </Role>
        <AboutText>
          👋 Olá! Sou um desenvolvedor em constante evolução com 25 anos e atualmente cursando <strong>Análise e Desenvolvimento de Sistemas</strong> 🚀. <br/> <br/>
          
          Meu conhecimento abrange uma variedade de tecnologias, incluindo: <br/>

          <strong><FaHtml5 size={30}/> Front-end:</strong> HTML, CSS, JavaScript, TypeScript, React.js, Next.js, Angular, Styled-components e Tailwind CSS. <br/>
          <strong><FaNodeJs size={30}/> Back-end:</strong> Node.js, Express, Prisma, APIs RESTful e Python. <br/>
          <strong><FaDatabase size={30}/> Database: PostgreSQL, MySQL</strong><br/>
          <strong><FaDocker size={30}/> Ferramentas e Metodologias:</strong> Docker, Scrum e Kanban.<br/><br/>

          Estou sempre em busca de novos conhecimentos e oportunidades para aprimorar minhas habilidades tanto no front-end quanto no back-end. 

          Além das habilidades técnicas, acredito que as soft skills são fundamentais. Consigo lidar bem com demandas, adapto-me facilmente a equipes diversas e mantenho o foco nos objetivos. <br />

          Estou empolgado para contribuir com sua equipe entregando excelência em cada projeto.
        </AboutText>
        <IconsContainer>
          <IconLink href="https://api.whatsapp.com/send?phone=5581986223012" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={30}/>
          </IconLink>
          <IconLink href="https://www.linkedin.com/in/henrique-fernandes-a29057214/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30}/>
          </IconLink>
          <IconLink href="https://github.com/henriferi" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30}/>
          </IconLink>
          <IconLink href="mailto:henriquefernandes.gouveia@gmail.com" rel="noopener noreferrer">
            <FaEnvelope size={30}/>
          </IconLink>
          <DownloadButton href="/curriculo.pdf" download>
            <FaDownload /> Currículo
          </DownloadButton>
        </IconsContainer>
      </TextContainer>
    </AboutContainer>
  );
};

export default About;
