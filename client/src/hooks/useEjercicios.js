import { useState } from "react";
import api from "../services/api";

export function useEjercicios() {
    const [ejercicios, setEjercicios] = useState([]);

    const obtenerEjercicios = async () => {
        try {
            const response = await api.get("/ejercicios");
            setEjercicios(response.data);
        } catch (error) {
            console.error("Error al obtener los ejercicios:", error);
        }
    };

    const obtenerEjerciciosPorRutina = async (rutinaId) => {
        try {
            const response = await api.get(
                `/ejercicios/rutina/${rutinaId}`
            );

            setEjercicios(response.data);
        } catch (error) {
            console.error(
                "Error al obtener los ejercicios de la rutina:",
                error
            );
        }
    };

    const guardarEjercicio = async (nuevoEjercicio) => {
        try {
            await api.post("/ejercicios", nuevoEjercicio);

            await obtenerEjerciciosPorRutina(
                nuevoEjercicio.rutinaId
            );
        } catch (error) {
            console.error("Error al guardar el ejercicio:", error);
        }
    };

    const eliminarEjercicio = async (id, rutinaId) => {
        try {
            await api.delete(`/ejercicios/${id}`);

            await obtenerEjerciciosPorRutina(rutinaId);
        } catch (error) {
            console.error("Error al eliminar el ejercicio:", error);
        }
    };

    const actualizarEjercicio = async (id, datos) => {
        try {
            await api.put(`/ejercicios/${id}`, datos);

            await obtenerEjerciciosPorRutina(
                datos.rutinaId
            );
        } catch (error) {
            console.error("Error al actualizar el ejercicio:", error);
        }
    };

    return {
        ejercicios,
        obtenerEjercicios,
        obtenerEjerciciosPorRutina,
        guardarEjercicio,
        eliminarEjercicio,
        actualizarEjercicio,
    };
}