import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AboutMe from './components/About';
import Skills from './components/Skills';
import Experiences from './components/Experiences';
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <NavBar/>
      <Home/>
      <AboutMe/>
      <Skills/>
      <Experiences/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
