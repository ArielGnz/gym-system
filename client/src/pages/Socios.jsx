import { useEffect, useState } from 'react';
import api from './services/api';
import FormularioSocio from "./components/FormularioSocio";
import ListaSocios from "./components/ListaSocios";
import ModalEditarSocio from './components/ModalEditarSocio';

function App() {
    
  const [socios, setSocios] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [socioEditando, setSocioEditando] = useState(null);

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

const sociosFiltrados = socios.filter((socio) => {
  const texto = busqueda.toLocaleLowerCase();

  return (
    socio.nombre.toLocaleLowerCase().includes(texto) ||
    socio.apellido.toLocaleLowerCase().includes(texto) ||
    socio.dni.toLocaleLowerCase().includes(texto)
  );

}) 


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

        <div className="mb-6">
          <input 
            type="text"
            placeholder="Buscar socio..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <h1>Socios encontrados: {sociosFiltrados.length}</h1>
        </div>

        <ListaSocios 
          socios={sociosFiltrados} 
          eliminarSocio={eliminarSocio}
          setSocioEditando={setSocioEditando}   
        />

        {socioEditando && (
          <ModalEditarSocio
            socio = {socioEditando}
            setSocioEditando = {setSocioEditando}
            obtenersocios = {obtenerSocios}
          />
        )}

      </div>
    </div>
);
}

export default App
