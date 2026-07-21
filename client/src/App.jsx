import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Socios from './pages/Socios';

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Socios />} />
      <Route path="/socios" element={<Socios />} />

    </Routes>
);
}

export default App
