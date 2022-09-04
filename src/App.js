import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import Links from './components/Links';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='projects' element={<Projects />} />
        </Routes>
        <Links />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
