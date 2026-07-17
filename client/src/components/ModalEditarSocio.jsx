import { useState, useEffect } from "react";
import api from "../services/api";

function ModalEditarSocio ({ socio, setSocioEditando, obtenersocios }) {

    const [nombre, setNombre] = useState(socio.nombre);
    const [apellido, setApellido] = useState(socio.apellido);
    const [dni, setDni] = useState(socio.dni);
    const [telefono, setTelefono] = useState(socio.telefono);

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-xl w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4">Editar Socio</h2>
            </div>
        </div>
    )

} 

export default ModalEditarSocio;