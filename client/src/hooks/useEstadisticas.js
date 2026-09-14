import { useState } from "react";
import api from "../services/api";

export function useEstadisticas() {
    const [estadisticas, setEstadisticas] = useState({
        totalSocios: 0,
        pagosDelMes: 0,
        pagosVencidos: 0,
        pagosPorVencer: 0,
    });

    const obtenerEstadisticas = async () => {
        try {
            const [sociosResponse, pagosResponse] = await Promise.all([
                api.get("/socios"),
                api.get("/pagos"),
            ]);

            const socios = sociosResponse.data;
            const pagos = pagosResponse.data;

            const hoy = new Date();

            const inicioMes = new Date(
                hoy.getFullYear(),
                hoy.getMonth(),
                1
            );

            const finMes = new Date(
                hoy.getFullYear(),
                hoy.getMonth() + 1,
                0,
                23,
                59,
                59
            );

            const pagosDelMes = pagos.filter((pago) => {
                const fecha = new Date(pago.fechaPago);

                return fecha >= inicioMes && fecha <= finMes;
            });

            const pagosVencidos = pagos.filter((pago) => {
                const fecha = new Date(pago.fechaVencimiento);

                return (
                    fecha < hoy &&
                    pago.estado !== "PAGADO"
                );
            });

            const fechaLimite = new Date(hoy);
            fechaLimite.setDate(hoy.getDate() + 7);

            const pagosPorVencer = pagos.filter((pago) => {
                const fecha = new Date(pago.fechaVencimiento);

                return (
                    fecha >= hoy &&
                    fecha <= fechaLimite &&
                    pago.estado !== "PAGADO"
                );
            });

            setEstadisticas({
                totalSocios: socios.length,
                pagosDelMes: pagosDelMes.length,
                pagosVencidos: pagosVencidos.length,
                pagosPorVencer: pagosPorVencer.length,
            });

        } catch (error) {
            console.error("Error al obtener estadísticas:", error);
        }
    };

    return {
        ...estadisticas,
        obtenerEstadisticas,
    };
}