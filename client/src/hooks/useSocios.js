import { usestate } from "react";
import api from "../services/api";

export function useSocios() {
    const [socios, setsocios] = usestate([]);

    const obtenerSocios = async () => {
        try {
            const response = await api.get("/socios");
            setSocios(response.data);

        } catch (error) {
            console.error("Error al obtener los socios:", error);
        }
    }

    return { 
        socios,
        setSocios, 
        obtenerSocios,
    };
}