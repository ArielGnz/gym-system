import { useEffect, useState } from 'react';
import api from './services/api';
import FormularioSocio from "./components/FormularioSocio";
import ListaSocios from "./components/ListaSocios";

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

  const guardarSocio = async () => {
  try {
    await api.post("/socios", {
      nombre,
      apellido,
      dni,
      telefono,
    });

    obtenerSocios();

    setNombre("");
    setApellido("");
    setDni("");
    setTelefono("");
  } catch (error) {
    console.error(error);
  }
};

const eliminarSocio = async (id) => {
  try {
    await api.delete(`/socios/${id}`);
    obtenerSocios();
  } catch (error) {
    console.error(error);
  }
}


  return (
    <div className="min-h-screen bg-slate-100">
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-8">
          Sistema de Gimnasio
        </h1>

        <FormularioSocio
          nombre={nombre}
          setNombre={setNombre}
          apellido={apellido}
          setApellido={setApellido}
          dni={dni}
          setDni={setDni}
          telefono={telefono}
          setTelefono={setTelefono}
          guardarSocio={guardarSocio}
        />

        <ListaSocios socios={socios} />
      </div>
    </div>
);
}

export default App
