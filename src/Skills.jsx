import React from 'react';
import styled from 'styled-components';
import { GiEarthAmerica } from 'react-icons/gi'; 
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiAngular, SiStyledcomponents, SiTailwindcss, SiDocker, SiPostgresql, SiMysql, SiPrisma, SiPython, SiTrello } from 'react-icons/si';

const SkillsContainer = styled.section`
  padding: 50px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  text-align: center;

   @media (max-width: 768px) { /* Ajustes para telas menores */
    padding: 30px; /* Diminuindo o padding em telas menores */
    margin-top: 70%;
  }
`;

const TitleSkills = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 30px;
`;

const AreaTitle = styled.h2 `
padding: 15px;`

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 30px;
`;

const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.text};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const SkillIcon = styled.div`
  font-size: 3rem; /* Tamanho do ícone */
  margin-bottom: 10px;
`;

const SkillName = styled.p`
  font-size: 1.2rem;
`;

const skillsData = {
  "Front-end": [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJsSquare /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Angular", icon: <SiAngular /> },
    { name: "Styled-components", icon: <SiStyledcomponents /> },
    { name: "TailwindCSS", icon: <SiTailwindcss /> },
  ],
  "Back-end": [
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express", icon: <FaNodeJs /> }
    { name: "API Restful", icon: <FaNodeJs /> }, 
    { name: "Python", icon: <SiPython /> },
    { name: "Prisma", icon: <SiPrisma /> },
  ],
  "Banco de Dados": [
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "MySQL", icon: <SiMysql /> },
  ],
  "Idiomas": [
    { name: "Inglês Basico", icon: <GiEarthAmerica /> },
  ],
  "Ferramentas e Metodologias": [
    { name: "Docker", icon: <SiDocker /> },
    { name: "Scrum", icon: <SiTrello /> },
  ],
};

const Skills = () => {
  return (
    <SkillsContainer id='skills'>
      <TitleSkills>Minhas Skills</TitleSkills>
      {Object.keys(skillsData).map(area => (
        <div key={area}>
          <AreaTitle>{area}</AreaTitle>
          <SkillsGrid>
            {skillsData[area].map(skill => (
              <SkillCard key={skill.name}>
                <SkillIcon>{skill.icon}</SkillIcon>
                <SkillName>{skill.name}</SkillName>
              </SkillCard>
            ))}
          </SkillsGrid>
        </div>
      ))}
    </SkillsContainer>
  );
};

export default Skills;
