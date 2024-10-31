// src/App.js

import styled from 'styled-components';
import { useTheme } from './ThemeContext';
import Header from './components/Header';
import About from './About';

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
    </>
  );
}

export default App;
