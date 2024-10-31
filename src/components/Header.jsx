
import React, { useState } from 'react';
import styled from 'styled-components';
import { useTheme } from '../ThemeContext';
import logoLight from '../assets/logo1.png';
import logoDark from '../assets/logo2.png';
import { FaSun, FaMoon, FaBars } from 'react-icons/fa';
import { Link } from 'react-scroll';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  border-bottom: 1px solid;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  justify-content: space-between;
  align-items: center;
  padding: 50px 20px; 
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text};
  z-index: 1000;
  height: 60px; 

  @media (max-width: 768px) {
    position: relative; 
  }
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;

  @media (max-width: 768px) {
    display: none; 
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 15px; 
  
  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')}; 
    flex-direction: column;
    position: absolute;
    top: 60px; 
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
  font-size: 1.7rem; 
  cursor: pointer;
  padding: 8px; 
  border-radius: 5px; 
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.secondary}; 
    color: ${({ theme }) => theme.primary}; 
  }
`;

const ThemeToggleButton = styled.button`
  position: fixed; 
  bottom: 20px; 
  right: 20px; 
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px; 
  height: 40px; 
  border: none;
  border-radius: 50%; 
  background-color: ${({ theme }) => theme.buttonBgLD}; 
  color: ${({ theme }) => theme.buttonColorLD}; 
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.buttonColorLDhover}; 
  }
`;

const HamburgerMenu = styled.button`
  display: none; 
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  font-size: 1.6rem;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const logoSrc = theme === 'light' ? logoLight : logoDark;

  const handleToggleMenu = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <HeaderContainer>
      <Logo href="about">
        <img src={logoSrc} alt="Logo do Meu Portfólio" style={{ width: '200px' }} /> 
      </Logo>
      <HamburgerMenu onClick={handleToggleMenu}>
        <FaBars />
      </HamburgerMenu>
      <Nav isOpen={isOpen}>
        <NavLink to="about" smooth={true} duration={500}>Sobre mim</NavLink>
        <NavLink to="projects" smooth={true} duration={500}>Projetos</NavLink>
        <NavLink to="skills" smooth={true} duration={500}>Skills</NavLink>
        <NavLink to="contact" smooth={true} duration={500}>Contato</NavLink>
      </Nav>
      <ThemeToggleButton onClick={toggleTheme}>
        {theme === 'light' ? <FaMoon /> : <FaSun />} 
      </ThemeToggleButton>
    </HeaderContainer>
  );
};

export default Header;
