// src/Header.js

import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../ThemeContext';
import logoLight from '../assets/logo1.png'; // Imagem para o modo claro
import logoDark from '../assets/logo2.png'; // Imagem para o modo escuro
import { FaSun, FaMoon } from 'react-icons/fa'; // Importando ícones de sol e lua
import { Link } from 'react-scroll'; // Importando para rolar suavemente

const HeaderContainer = styled.header`
  position: fixed; /* Deixa o cabeçalho fixo na parte superior */
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  border-bottom: 1px solid;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text};
  z-index: 1000; /* Garante que o cabeçalho fique acima de outros elementos */
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Nav = styled.nav`
  display: flex;
  gap: 30px; /* Aumenta o espaço entre os links */
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-size: 1.8rem; /* Aumenta o tamanho do texto */
  cursor: pointer;
  padding: 10px; /* Adiciona um espaço ao redor do texto */
  border-radius: 5px; /* Arredonda os cantos do botão */
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.secondary}; /* Cor do fundo ao passar o mouse */
    color: ${({ theme }) => theme.primary}; /* Altera a cor do texto ao passar o mouse */
  }
`;

const ThemeToggleButton = styled.button`
  margin-left: 20px; // Espaço entre os links e o botão
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px; // Largura do botão
  height: 40px; // Altura do botão
  border: none;
  border-radius: 50%; // Arredondamento dos cantos
  background-color: ${({ theme }) => theme.secondary}; // Cor de fundo do botão
  color: ${({ theme }) => theme.text}; // Cor do ícone
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.primary}; // Cor do fundo ao passar o mouse
  }
`;

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  // Seleciona a logo com base no tema atual
  const logoSrc = theme === 'light' ? logoLight : logoDark;

  return (
    <HeaderContainer>
      <Logo href="#home"> {/* Logo como link para o início da página */}
        <img src={logoSrc} alt="Logo do Meu Portfólio" style={{ width: '110px' }} />
      </Logo>
      <Nav>
        <NavLink to="about" smooth={true} duration={500}>About</NavLink>
        <NavLink to="projects" smooth={true} duration={500}>Projects</NavLink>
        <NavLink to="contact" smooth={true} duration={500}>Contact</NavLink>
      </Nav>
      <ThemeToggleButton onClick={toggleTheme}>
        {theme === 'light' ? <FaMoon /> : <FaSun />} {/* Ícone baseado no tema */}
      </ThemeToggleButton>
    </HeaderContainer>
  );
};

export default Header;
