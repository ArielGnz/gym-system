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


      <div>

  <h2>Nuevo Socio</h2>

  <input
    type="text"
    placeholder="Nombre"
    value={nombre}
    onChange={(e) => setNombre(e.target.value)}
  />

  <br />
  <br />

  <input
    type="text"
    placeholder="Apellido"
    value={apellido}
    onChange={(e) => setApellido(e.target.value)}
  />

  <br />
  <br />

  <input
    type="text"
    placeholder="DNI"
    value={dni}
    onChange={(e) => setDni(e.target.value)}
  />

  <br />
  <br />

  <input
    type="text"
    placeholder="Teléfono"
    value={telefono}
    onChange={(e) => setTelefono(e.target.value)}
  />

  <br />
  <br />

  <button onClick={guardarSocio}>
    Guardar Socio
  </button>
</div>

    </div>
  );
}

export default App
