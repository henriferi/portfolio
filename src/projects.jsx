// src/Projects.js
import React from 'react';
import styled from 'styled-components';
import projectsData from './data/projects';

// Estilizações
const ProjectsContainer = styled.section`
  padding: 50px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};

  @media (max-width: 768px) { /* Ajustes para telas menores */
    padding: 30px; /* Diminuindo o padding em telas menores */
  }
`;

const TitleProjects = styled.h1`
  font-size: 2.5rem;
  padding: 50px;
  text-align: center;

  @media (max-width: 768px) { /* Ajustes para telas menores */
    font-size: 2rem; /* Diminuindo o tamanho da fonte em telas menores */
    padding: 30px; /* Diminuindo o padding em telas menores */
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 2fr)); /* Layout responsivo */
  gap: 20px;

  @media (max-width: 768px) { /* Ajustes para telas menores */
    grid-template-columns: 1fr; /* Colocando os cartões em coluna única */
  }
`;

const ProjectCard = styled.div`
  position: relative;
  overflow: hidden;
  height: auto;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.text};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05); /* Efeito de aumento no hover */
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%; /* Defina a altura para 100% do contêiner */
  object-fit: cover; /* Aplica o efeito de cover */
  display: block;
`;


const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); /* Fundo escuro */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${ProjectCard}:hover & {
    opacity: 1; /* Exibir overlay ao passar o cursor */
  }
`;

const ProjectName = styled.h3`
  color: #fff;
  font-size: 2rem;

  @media (max-width: 768px) { /* Ajustes para telas menores */
    font-size: 1.5rem; /* Diminuindo o tamanho da fonte em telas menores */
  }
  margin-bottom: 10px;
`;

const Button = styled.a`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text};
  padding: 10px 16px;
  border-radius: 4px;
  text-decoration: none;
  font-size: 1.5rem;
  margin: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.secondary};
  }

  @media (max-width: 768px) { /* Ajustes para telas menores */
    font-size: 1.2rem; /* Diminuindo o tamanho da fonte do botão */
    padding: 8px 12px; /* Ajustando o padding do botão */
  }
`;

const Projects = () => {
  return (
    <ProjectsContainer id='projects'>
      <TitleProjects>Meus Projetos</TitleProjects>
      <Grid>
        {projectsData.map((project) => (
          <ProjectCard key={project.id}>
            <ProjectImage src={project.image} alt={project.name} />
            <ProjectOverlay>
              <ProjectName>{project.name}</ProjectName>
              <Button href={project.liveLink} target="_blank" rel="noopener noreferrer">Ver Projeto</Button>
              <Button href={project.codeLink} target="_blank" rel="noopener noreferrer">Ver Código</Button>
            </ProjectOverlay>
          </ProjectCard>
        ))}
      </Grid>
    </ProjectsContainer>
  );
};

export default Projects;
