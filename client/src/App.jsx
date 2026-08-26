
import { Routes, Route } from 'react-router-dom';
import Socios from './pages/Socios';
import Dashboard from './pages/Dashboard';
import Planes from './pages/Planes';
import Pagos from './pages/Pagos';

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/socios" element={<Socios />} />
      <Route path="/planes" element={<Planes />} />
      <Route path="/pagos" element={<Pagos />} />

    </Routes>
  );
}

export default App
