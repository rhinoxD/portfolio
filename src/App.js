import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import './App.css';
import './stylesheets/home.css';
import './stylesheets/header-footer.css';
import './stylesheets/carousel.css';
import './stylesheets/projects.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Route path='/' exact component={Home} />
        <Route path='/projects' exact component={Projects} />
        <Route path='/contact' exact component={Contact} />
      </Router>
    </div>
  );
}

export default App;
