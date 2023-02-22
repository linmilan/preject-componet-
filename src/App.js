
import './App.css';
import Portfolio from './components/project/Portfolio';

import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
