import { useEffect, useState } from 'react';
import api from './services/api';

function App() {
  const [socios, setSocios] = useState([]);

  const [nombre, setNombre] = useState("");
const [apellido, setApellido] = useState("");
const [dni, setDni] = useState("");
const [telefono, setTelefono] = useState("");

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
    <div>
      <h1>Sistema de Gimnasio</h1>

      {
        socios.map((socio) => (
          <div key={socio.id}>
            <h2>{socio.nombre} {socio.apellido}</h2>
            <p>Edad: {socio.edad}</p>
          </div>
        ))
      }

    </div>
  );
}

export default App
