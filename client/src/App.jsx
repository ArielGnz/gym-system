import { useEffect, useState } from 'react';
import api from './services/api';

function App() {
  const [socios, setSocios] = useState([]);

  useEffect(() =>{
    obtenerSocios();
  }, []);

  const obtenerSocios = async () => {
    try {
      const response = await api.get("/socios");
      setSocios(response.data);
    } catch (error) {
      console.error("Error al obtener los socios:", error);
    }
  };
  

  return (
    <>
      <h1>Sistema de Gimnasio</h1>
    </>
  );
}

export default App
