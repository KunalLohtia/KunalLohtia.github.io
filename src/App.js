import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AboutMe from './components/About';
import Skills from './components/Skills';
import Experiences from './components/Experiences';


function App() {
  return (
    <>
      <NavBar/>
      <Home/>
      <AboutMe/>
      <Skills/>
      <Experiences/>
    </>
  );
}

export default App;
