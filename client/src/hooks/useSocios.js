import { useState } from "react";
import api from "../services/api";

export function useSocios() {
    
    const [socios, setSocios] = useState([]);

    const obtenerSocios = async () => {
        try {
            const response = await api.get("/socios");
            setSocios(response.data);

        } catch (error) {
            console.error("Error al obtener los socios:", error);
        }
    }

    const guardarSocio = async (nuevoSocio) => {
        try {
            await api.post("/socios", nuevoSocio);
            await obtenerSocios();
        } catch (error) {
            console.error(error);
        }
    }

    const eliminarSocio = async (id) => {
        try {
            await api.delete(`/socios/${id}`);
            await obtenerSocios();
        } catch (error) {
             console.error(error);
        }
    };

    return { 
        socios,
        setSocios, 
        obtenerSocios,
        guardarSocio,
        eliminarSocio
    };
}