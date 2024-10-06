import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AboutMe from './components/About'
import Skills from './components/Skills'

function App() {
  return (
    <>
      <NavBar/>
      <Home/>
      <AboutMe/>
      <Skills/>
    </>
  );
}

export default App;
