import Layout from "../components/layout/Layout";
import StatCard from "../components/common/StatCard";
import { FaUsers, FaMoneyBill, FaDumbbell } from "react-icons/fa";

function Dashboard() {
    return (
        <Layout>
            <h1 className="text-3xl font-bold mb-6">
                Dashboard
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard
                    titulo="Total Socios"
                    valor=""
                    icono={<FaUsers />} />
                <StatCard
                    titulo="Pagos"
                    valor="0"
                    icono={<FaMoneyBill />} />
                <StatCard
                    titulo="Rutinas"
                    valor="0"
                    icono={<FaDumbbell />} />
            </div>
        </Layout>
    )
}

export default Dashboard;