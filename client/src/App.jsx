
import { Routes, Route } from 'react-router-dom';
import Socios from './pages/Socios';
import Dashboard from './pages/Dashboard';
import Planes from './pages/Planes';
import Pagos from './pages/Pagos';
import Sucursales from './pages/Sucursales';
import Rutinas from './pages/Rutinas';

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/socios" element={<Socios />} />
      <Route path="/planes" element={<Planes />} />
      <Route path="/pagos" element={<Pagos />} />
      <Route path="/sucursales" element={<Sucursales />} />
      <Route path="/rutinas" element={<Rutinas />} />
    </Routes>
  );
}

export default App
