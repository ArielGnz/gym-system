import { useState } from "react";
import api from "../services/api";

export const usePlanes = () => {
    const [planes, setPlanes] = useState([]);

    const obtenerPlanes = async () => {
        try {
            const response = await api.get("/planes");
            setPlanes(response.data);
        } catch (error) {
            console.error("Error al obtener los planes:", error);
        }
    }

    const guardarPlan = async (plan) => {
        try {
            await api.post("/planes", plan);
            await obtenerPlanes();
        } catch (error) {
            console.error("Error al guardar el plan:", error);
        }
    }

    const eliminarPlan = async (id) => {
        try {
            await api.delete(`/planes/${id}`);
            await obtenerPlanes();
        } catch (error) {
            console.error("Error al eliminar el plan:", error);
        }
    }

    const actualizarPlan = async (id, plan) => {
        try {
            await api.put(`/planes/${id}`, plan);
            await obtenerPlanes();
        } catch (error) {
            console.error("Error al actualizar el plan:", error);
        }
    }

    return { planes, obtenerPlanes, guardarPlan, eliminarPlan, actualizarPlan };
}