import { useState, useEffect } from "react";
import api from "../services/api";

function ModalEditarSocio ({ socio, setSocioEditando, obtenersocios }) {

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
                        onchange={(e) => setNombre(e.target.value)}
                        placeholder="Nombre"
                        className="w-full border rounded-lg px-3 py-2"
                    />

                    <input 
                        type="text"
                        value={apellido}
                        onchange={(e) => setApellido(e.target.value)}
                        placeholder="Apellido"
                        className="w-full border rounded-lg px-3 py-2"
                    />
                    <input 
                        type="text"
                        value={dni}
                        onchange={(e) => setDni(e.target.value)}
                        placeholder="DNI"
                        className="w-full border rounded-lg px-3 py-2"
                    />
                    <input 
                        type="text"
                        value={telefono}
                        onchange={(e) => setTelefono(e.target.value)}
                        placeholder="Teléfono"
                        className="w-full border rounded-lg px-3 py-2"
                    />

                </div>
            </div>
        </div>
    )

} 

export default ModalEditarSocio;