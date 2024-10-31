
import { useTheme } from './ThemeContext';
import Header from './components/Header';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Div from './Div';
import Skills from './Skills';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Header />
      <About />
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
