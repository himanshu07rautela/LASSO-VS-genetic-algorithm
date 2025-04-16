import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Results from './pages/Results';
import Methodology from './pages/Methodology';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/results" element={<Results />} />
            <Route path="/methodology" element={<Methodology />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <footer className="bg-gray-800 text-white py-6">
          <div className="container">
            <p className="text-center">
              © 2024 Genetic Algorithm vs LASSO in CVD Detection Algorithms. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
