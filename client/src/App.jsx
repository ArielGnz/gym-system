
import { Routes, Route } from 'react-router-dom';
import Socios from './pages/Socios';
import Dashboard from './pages/Dashboard';

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/socios" element={<Socios />} />

    </Routes>
  );
}

export default App
