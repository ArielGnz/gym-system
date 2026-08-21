import { useState } from "react";
import api from "../services/api";


export const usePagos = () => {

    const [pagos, setPagos] = usestate([]);

    const obtenerPagos = async () => {
        try {
            const response = await api.get("/pagos");
            setPagos(response.data);
        } catch (error) {
            console.error("Error al obtener los Pagos:", error);
        }
    }

    

}