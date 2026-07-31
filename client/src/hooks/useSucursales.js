import { useState } from "react";
import api from "../services/api";

export function useSucursales() {
    
    const [sucursales, setSucursales] = useState([]);

    const obtenerSucursales = async () => {
        try {
            const response = await api.get("/sucursales");
            setSucursales(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const guardarSucursales = async (nuevaSucursal) => {
        try {
            await api.post("/sucursales", nuevaSucursal);
            await obtenerSucursales();
        } catch (error) {
            console.error(error);
        }
    };
    
}