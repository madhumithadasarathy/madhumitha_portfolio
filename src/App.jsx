import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Achievements from './pages/Achievements';
import Certifications from './pages/Certifications';
import Experience from './pages/Experience';
import Extracurriculars from './pages/Extracurriculars';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-checkerboard min-h-screen font-poppins text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/extracurriculars" element={<Extracurriculars />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
