import Layout from "../components/layout/Layout";
import StatCard from "../components/common/StatCard";
import { FaUsers, FaMoneyBill, FaDumbbell } from "react-icons/fa";
import { useSocios } from "../hooks/useSocios";
import { useEffect } from "react";

function Dashboard() {

    const {
        obtenerSocios,
        cantidadSocios,
    } = useSocios();

    const estadisticas = [
        {
            titulo: "Total Socios",
            valor: cantidadSocios,
            icono: <FaUsers />,
            color: "bg-blue-600",
        },
        {
            titulo: "Pagos",
            valor: "0",
            icono: <FaMoneyBill />,
            color: "bg-green-600"
        },
        {
            titulo: "Rutinas",
            valor: "0",
            icono: <FaDumbbell />,
            color: "bg-purple-600",
        }
    ];

    useEffect(() => {
        obtenerSocios();
    }, []);

    return (
        <Layout>
            <h1 className="text-3xl font-bold mb-6">
                Dashboard
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {estadisticas.map((item) => (
                    <StatCard
                        key={item.titulo}
                        titulo={item.titulo}
                        valor={item.valor}
                        icono={item.icono}
                    />
                ))}
            </div>
        </Layout>
    )
}

export default Dashboard;