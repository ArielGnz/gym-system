import { useState, useEffect } from "react";
import api from "../services/api";

function ModalEditarSocio ({ socio, setSocioEditando, obtenerSocios }) {

    const [nombre, setNombre] = useState(socio.nombre);
    const [apellido, setApellido] = useState(socio.apellido);
    const [dni, setDni] = useState(socio.dni);
    const [telefono, setTelefono] = useState(socio.telefono);

    const actualizarSocio = async () => {
        try {
            await api.put(`/socios/${socio.id}`,{
                nombre,
                apellido,
                dni,
                telefono,
            });

            await obtenerSocios();
            setSocioEditando(null);

        } catch (error) {
            console.error(error);
        }
        
    }

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-xl w-full max-w-md">
                <div className="flex justify-end">
                    <button onClick={() => setSocioEditando(null)}
                        className="text-gray-500 text-xl"> ✕
                    </button>
                </div>
                <h2 className="text-2xl font-bold mb-4">Editar Socio</h2>
                <div className="space-y-3">
                    <input 
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        placeholder="Nombre"
                        className="w-full border rounded-lg px-3 py-2"
                    />

                    <input 
                        type="text"
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)}
                        placeholder="Apellido"
                        className="w-full border rounded-lg px-3 py-2"
                    />
                    <input 
                        type="text"
                        value={dni}
                        onChange={(e) => setDni(e.target.value)}
                        placeholder="DNI"
                        className="w-full border rounded-lg px-3 py-2"
                    />
                    <input 
                        type="text"
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                        placeholder="Teléfono"
                        className="w-full border rounded-lg px-3 py-2"
                    />

                </div>

                <button onClick={actualizarSocio} className="w-full bg-blue-600 text-white py-2 rounded-lg mt-4">
                    Actualizar Socio
                </button>
            </div>
        </div>
    )

} 

export default ModalEditarSocio;