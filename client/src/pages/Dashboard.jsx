import Layout from "../components/layout/Layout";
import StatCard from "../components/common/StatCard";
import WelcomeCard from "./Dashboard/WelcomeCard";
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

            <WelcomeCard/>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
    )
}

export default Dashboard;