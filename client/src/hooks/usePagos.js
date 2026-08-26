import { useState } from "react";
import api from "../services/api";


export const usePagos = () => {

    const [pagos, setPagos] = useState([]);

    const obtenerPagos = async () => {
        try {
            const response = await api.get("/pagos");
            setPagos(response.data);
        } catch (error) {
            console.error("Error al obtener los Pagos:", error);
        }
    }

    const guardarPago = async (nuevoPago) => {
        try {
            await api.post("/pagos", nuevoPago);
            await obtenerPagos();
        } catch (error) {
            console.error("Error al guardar el pago:", error);
        }
    }

    const actualizarPago = async (id, pagoActualizado) => {
        try {
            await api.put(`/pagos/${id}`, pagoActualizado);
            await obtenerPagos();
        } catch (error) {
            console.error("Erro al actualizar el Pago:",error)
        }
    }

    const eliminarPago = async (id) => {
        try {
            await api.delete(`/pagos/${id}`);
            await obtenerPagos();
        } catch (error) {
            console.error("Error al eliminar el Pago:", error);
        }
    }

    return {
        pagos,
        setPagos,
        obtenerPagos,
        guardarPago,
        actualizarPago,
        eliminarPago,
    }

}