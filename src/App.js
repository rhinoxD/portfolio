import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';

import './App.css';
import './stylesheets/home.css';
import './stylesheets/header-footer.css';
import './stylesheets/carousel.css';
import './stylesheets/projects.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init({
  duration: 650,
});

function App() {
  return (
    <div className='App'>
      <Router>
        <Route path='/' exact component={Home} />
        <Route path='/projects' exact component={Projects} />
        <Route path='/contact' exact component={Contact} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
