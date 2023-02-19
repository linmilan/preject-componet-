
import './App.css';
import Portfolio from './components/project/Portfolio';
import HeaderSocials from './components/header/HealderSocials';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <HeaderSocials />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
