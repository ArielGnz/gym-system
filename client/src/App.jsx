import { useEffect, useState } from 'react';
import { Routes, route } from 'react-router-dom';
import Socios from './pages/Socios';

function App() {
  
  return (
    <Routes>
      <route path="/socios" element={<Socios />} />

    </Routes>
);
}

export default App
