import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Videos from './pages/Videos';
import PPTs from './pages/PPTs';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projetos" element={<Projects />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/apresentacoes" element={<PPTs />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
export default App;