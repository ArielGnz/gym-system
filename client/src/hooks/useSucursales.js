import { useState } from "react";
import api from "../services/api";
import { eliminarSocio } from "../../../server/src/controllers/socioControllers";
import { eliminarSucursal } from "../../../server/src/controllers/sucursalControllers";

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

    const elminiarSucursal = async (id) => {
        try {
            await api.delete(`/sucursales/${id}`);
            await obtenerSucursales();
        } catch (error) {
            console.error(error);
        }
    };

    const actualzarSucursales = async (id, datos) => {
        try {
            await api.put(`/sucursales/${id}`, datos);
            await obtenerSucursales();
        } catch (error) {
            console.error(error);
        }
    };

    return {
        sucursales,
        obtenerSucursales,
        guardarSucursales,
        eliminarSucursal,
        actualzarSucursales,
    };

}