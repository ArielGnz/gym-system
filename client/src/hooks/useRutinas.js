import { useState } from "react";
import api from "../services/api";

export function useRutinas() {
    const [rutinas, setRutinas] = useState([]);

    const obtenerRutinas = async () => {
        try {
            const response = await api.get("/rutinas");
            setRutinas(response.data);
        } catch (error) {
            console.error("Error al obtener las rutinas:", error);
        }
    };

    const guardarRutina = async (nuevaRutina) => {
        try {
            await api.post("/rutinas", nuevaRutina);
            await obtenerRutinas();
        } catch (error) {
            console.error("Error al guardar la rutina:", error);
        }
    };

    const eliminarRutina = async (id) => {
        try {
            await api.delete(`/rutinas/${id}`);
            await obtenerRutinas();
        } catch (error) {
            console.error("Error al eliminar la rutina:", error);
        }
    };

    const actualizarRutina = async (id, datos) => {
        try {
            await api.put(`/rutinas/${id}`, datos);
            await obtenerRutinas();
        } catch (error) {
            console.error("Error al actualizar la rutina:", error);
        }
    };

    return {
        rutinas,
        obtenerRutinas,
        guardarRutina,
        eliminarRutina,
        actualizarRutina,
    };
}