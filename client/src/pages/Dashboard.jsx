import Layout from "../components/layout/Layout";
import StatCard from "../components/common/StatCard";
import WelcomeCard from "../components/dashboard/WelcomeCard";
import {
    FaUsers,
    FaMoneyBill,
    FaExclamationTriangle,
    FaClock
} from "react-icons/fa";
import { useEstadisticas } from "../hooks/useEstadisticas";
import { useEffect } from "react";

function Dashboard() {

    const {
        totalSocios,
        pagosDelMes,
        pagosVencidos,
        pagosPorVencer,
        obtenerEstadisticas,
    } = useEstadisticas();

    useEffect(() => {
        obtenerEstadisticas();
    }, []);

    const estadisticas = [
        {
            titulo: "Total Socios",
            valor: totalSocios,
            icono: <FaUsers />,
            color: "bg-blue-600",
        },
        {
            titulo: "Pagos del Mes",
            valor: pagosDelMes,
            icono: <FaMoneyBill />,
            color: "bg-green-600",
        },
        {
            titulo: "Pagos Vencidos",
            valor: pagosVencidos,
            icono: <FaExclamationTriangle />,
            color: "bg-red-600",
        },
        {
            titulo: "Por Vencer",
            valor: pagosPorVencer,
            icono: <FaClock />,
            color: "bg-yellow-500",
        },
    ];

    return (
        <Layout>

            <WelcomeCard />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {estadisticas.map((item) => (
                    <StatCard
                        key={item.titulo}
                        titulo={item.titulo}
                        valor={item.valor}
                        icono={item.icono}
                        color={item.color}
                    />
                ))}
            </div>

        </Layout>
    );
}

export default Dashboard;