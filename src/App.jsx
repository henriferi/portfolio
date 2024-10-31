// src/App.js

import styled from 'styled-components';
import { useTheme } from './ThemeContext';
import Header from './components/Header';
import About from './About';
import Projects from './projects';
import Contact from './Contact';
import Div from './Div';
import Skills from './Skills';
import Footer from './components/Footer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

function App() {
  return (
    <>
      <Header />
      <Container>
        <About />
      </Container>
      <Div />
      <Skills />
      <Div />
      <Projects />
      <Div />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
