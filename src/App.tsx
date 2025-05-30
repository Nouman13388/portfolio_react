
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Research from './components/Research';
import Publications from './components/Publications';
import Blog from './components/Blog';
import CV from './components/CV';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Research />
      <Publications />
      <Blog />
      <CV />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
