
import { useState } from "react";
import api from "../services/api";

export function useAsistencias() {
    const [asistencias, setAsistencias] = useState([]);
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState("");

    // Obtener historial de asistencias
    const obtenerAsistencias = async () => {
        setCargando(true);
        setError("");

        try {
            const response = await api.get("/asistencias");
            setAsistencias(response.data);
        } catch (error) {
            console.error("Error al obtener asistencias:", error);
            setError(
                error.response?.data?.mensaje ||
                "No se pudieron cargar las asistencias"
            );
        } finally {
            setCargando(false);
        }
    };

    // Registrar asistencia
    const registrarAsistencia = async (datos) => {
        setError("");

        try {
            await api.post("/asistencias", datos);
            await obtenerAsistencias();
            return true;
        } catch (error) {
            console.error("Error al registrar asistencia:", error);

            setError(
                error.response?.data?.mensaje ||
                "No se pudo registrar la asistencia"
            );

            return false;
        }
    };

    // Eliminar asistencia
    const eliminarAsistencia = async (id) => {
        setError("");

        try {
            await api.delete(`/asistencias/${id}`);
            await obtenerAsistencias();
            return true;
        } catch (error) {
            console.error("Error al eliminar asistencia:", error);

            setError(
                error.response?.data?.mensaje ||
                "No se pudo eliminar la asistencia"
            );

            return false;
        }
    };

    return {
        asistencias,
        cargando,
        error,
        obtenerAsistencias,
        registrarAsistencia,
        eliminarAsistencia,
    };
}
