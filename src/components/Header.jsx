// src/Header.js

import React, { useState } from 'react';
import styled from 'styled-components';
import { useTheme } from '../ThemeContext';
import logoLight from '../assets/logo1.png'; // Imagem para o modo claro
import logoDark from '../assets/logo2.png'; // Imagem para o modo escuro
import { FaSun, FaMoon, FaBars } from 'react-icons/fa'; // Importando ícones de sol, lua e menu
import { Link } from 'react-scroll'; // Importando para rolar suavemente

const HeaderContainer = styled.header`
  position: fixed; /* Deixa o cabeçalho fixo na parte superior */
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  border-bottom: 1px solid;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  justify-content: space-between;
  align-items: center;
  padding: 50px 20px; /* Diminui o padding */
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text};
  z-index: 1000; /* Garante que o cabeçalho fique acima de outros elementos */
  height: 60px; /* Define uma altura fixa */
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;

  @media (max-width: 768px) {
    display: none; /* Oculta a logo em telas menores */
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 15px; /* Diminui o espaço entre os links */
  
  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')}; /* Oculta o menu em telas pequenas */
    flex-direction: column;
    position: absolute;
    top: 60px; /* Abaixo do cabeçalho */
    left: 0;
    right: 0;
    background-color: ${({ theme }) => theme.primary};
    padding: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-size: 1.7rem; /* Diminui o tamanho do texto */
  cursor: pointer;
  padding: 8px; /* Diminui o espaço ao redor do texto */
  border-radius: 5px; /* Arredonda os cantos do botão */
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.secondary}; /* Cor do fundo ao passar o mouse */
    color: ${({ theme }) => theme.primary}; /* Altera a cor do texto ao passar o mouse */
  }
`;

const ThemeToggleButton = styled.button`
  position: fixed; /* Fixa o botão na tela */
  bottom: 20px; /* Distância do fundo */
  right: 20px; /* Distância da direita */
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

const HamburgerMenu = styled.button`
  display: none; /* Oculta o menu em telas grandes */
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  font-size: 1.6rem; /* Diminui o tamanho do ícone do menu */

  @media (max-width: 768px) {
    display: flex; /* Exibe o ícone de menu em telas pequenas */
  }
`;

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar a abertura do menu

  // Seleciona a logo com base no tema atual
  const logoSrc = theme === 'light' ? logoLight : logoDark;

  const handleToggleMenu = () => {
    setIsOpen(prevState => !prevState); // Alterna a visibilidade do menu
  };

  return (
    <HeaderContainer>
      <Logo href="about">
        <img src={logoSrc} alt="Logo do Meu Portfólio" style={{ width: '90px' }} /> {/* Diminui a largura da logo */}
      </Logo>
      <HamburgerMenu onClick={handleToggleMenu}>
        <FaBars />
      </HamburgerMenu>
      <Nav isOpen={isOpen}>
        <NavLink to="about" smooth={true} duration={500}>Sobre mim</NavLink>
        <NavLink to="projects" smooth={true} duration={500}>Projetos</NavLink>
        <NavLink to="contact" smooth={true} duration={500}>Contato</NavLink>
      </Nav>
      <ThemeToggleButton onClick={toggleTheme}>
        {theme === 'light' ? <FaMoon /> : <FaSun />} {/* Ícone baseado no tema */}
      </ThemeToggleButton>
    </HeaderContainer>
  );
};

export default Header;
